export default function Validator(options) {
    var selectorRules = {};
    function Validate(inputElement, rule) {
        var errorMessage;
        //Lấy ra các rule của selector
        var rules = selectorRules[rule.selector];
        //Lặp qua tứng rule & kiểm tra
        //Nếu có lỗi thì sẽ xuất ra lỗi đầu tiên và thoát ra khỏi vòng lặp
        for (let i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'));
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) { break; }
        }
        if (errorMessage) {
            inputElement.parentElement.querySelector(options.messageElement).innerText = errorMessage;
            inputElement.classList.add('is-invalid');
        } else {
            inputElement.parentElement.querySelector(options.messageElement).innerText = '\u00a0';
            inputElement.classList.remove('is-invalid');
        }
        return errorMessage;
    }
    const formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
            let isValidForm = true;
            options.rules.forEach((rule) => {
                const inputElement = formElement.querySelector(rule.selector);
                let isValid = Validate(inputElement, rule);
                if (isValid) {
                    isValidForm = false;
                }
            });
            const enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
            //Lưu ý: NodeList thì không có những phương thức của array nên ta cần chuyển từ nodeList thành array
            if (isValidForm) {
                if (typeof options.onSubmit === 'function') {
                    const formValues = Array.from(enableInputs).reduce((values, input) => {
                        switch (input.type) {
                            case 'checkbox': {
                                if (!input.matches(':checked')) return values;
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            }
                            case 'radio': {
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked')
                                    ? formElement.querySelector('input[name="' + input.name + '"]:checked').value : '';
                                break;
                            }
                            case 'file': {
                                values[input.name] = input.files;
                                break;
                            }
                            default: {
                                values[input.name] = input.value
                            }
                        }
                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
            }
        }
        options.rules.forEach((rule) => {
            if (selectorRules[rule.selector]) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            const inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach((inputElement) => {
                if (inputElement) {
                    inputElement.onblur = () => {
                        Validate(inputElement, rule);
                    }
                    inputElement.onclick = function () {
                        inputElement.parentElement.querySelector(options.messageElement).innerText = '\u00a0';
                        inputElement.classList.remove('is-invalid');
                    }
                }
            });
        })
    }
}
//Định nghĩa các rules 
//Nguyên tắc của các rules:
//1. có lỗi => Trả ra message lỗi
//2. Khi hợp lệ => Không trả ra cái gì cả (underfined)
Validator.isRequired = function (selector, message) {
    return {
        selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này';
        }
    }
}
Validator.isEmail = function (selector) {
    return {
        selector,
        test: function (value) {
            const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regexEmail.test(value) ? undefined : 'Trường này phải là Email';
        }
    }
}
Validator.isPassword = function (selector, min) {
    return {
        selector,
        test: function (value) {
            return value.trim().length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    }
}

Validator.isConformed = function (selector, getConfirmValue, message) {
    return {
        selector,
        test: function (value) {
            return value == getConfirmValue() ? undefined : message || 'Xác nhận mật khẩu không chính xác';
        }
    }
}
//Lưu ý: NodeList thì không có những phương thức của array nên ta cần chuyển từ nodeList thành array
