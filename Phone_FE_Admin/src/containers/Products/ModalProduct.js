import React, { useEffect, useState } from "react";
import Input from "./../../components/UI/Input";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../helpers/axios";
import { toast } from "react-toastify";
import { getAllCategory, getProducts } from "../../actions";
import { addSucessMsg, errMsg, updateSucessMsg } from "../../helpers/messages";
import { getAllBrand } from "../../actions/brand.action";

function ModalProduct(props) {
  const dispatch = useDispatch();
  const listCategory = useSelector(state => state.category);
  const listBrand = useSelector(state => state.brand);
  const [product, setProduct] = useState({
    id: "",
    productname: "",
    imageurl: "",
    infodesign: "",
    infomation: "",
    monitor: "",
    system: "",
    cpu: "",
    ram: "",
    pin: "",
    thietKe: "",
    price: "",
    categoryId: "",
    brandId: "",
    productImages: "",
  });

  useEffect(() => {
    if (props.info.id) {
      axiosInstance.get(`product/${props.info.id}`).then((res) => {
        setProduct({
          ...res.data,
          categoryId: res.data.category.id,
          brandId: res.data.brand.id
        });
      });
    }
    dispatch(getAllBrand());
    dispatch(getAllCategory());
  }, []);

  let onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const id = props.info.id;
    if (id) {
      axiosInstance.put(`product/${id}`, product).then(res => {
        if (res.status === 200) {
          dispatch(getProducts());
          toast.success(updateSucessMsg);
        } else {
          toast.error(errMsg)
        }
      })
    } else {
      delete product.id;
      axiosInstance.post(`product`, product).then(res => {
        if (res.status === 200) {
          dispatch(getProducts());
          toast.success(addSucessMsg);
        } else {
          toast.error(errMsg)
        }
      })
    }
    props.onHide();
  }

  return (
    <Modal className="modal" show={props.info.isShowModal} onHide={props.handleShow}>
      <Form onSubmit={onHandleSubmit} noValidate>
        <Modal.Header closeButton>
          <Modal.Title>Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.info.id ? <Input
            label='Product ID:'
            disabled={true}
            value={product.id}
            placeholder={'Product ID'}
            name='id'
            onChange={(e) => { onChange(e) }}
          />
            : null}

          <Input
            label='Product name:'
            value={product.productname}
            placeholder={'Product name'}
            name='productname'
            onChange={(e) => { onChange(e) }}
          />
          <Input
            label='Price:'
            type={'number'}
            value={product.price}
            placeholder={'price'}
            name='price'
            onChange={(e) => { onChange(e) }}
          />
          <Input
            label='Specifications:'
            value={product.infodesign}
            placeholder={'Specifications'}
            name='infodesign'
            onChange={(e) => { onChange(e) }}
          />
          <Input
            label='Information:'
            value={product.infomation}
            placeholder={'Infomation'}
            name='infomation'
            onChange={(e) => { onChange(e) }}
          />
          <Input
            label='Monitor:'
            value={product.monitor}
            placeholder={'Monitor'}
            name='monitor'
            onChange={(e) => { onChange(e) }}
          />
          <Input
            label='System:'
            value={product.system}
            placeholder={'System'}
            name='system'
            onChange={(e) => { onChange(e) }}
          />
          <Input
            label='Cpu:'
            value={product.cpu}
            placeholder={'Cpu'}
            name='cpu'
            onChange={(e) => { onChange(e) }}
          />
          <Input
            label='Ram:'
            value={product.ram}
            placeholder={'Ram'}
            name='ram'
            onChange={(e) => { onChange(e) }}
          />
          <Input
            label='Design:'
            value={product.thietKe}
            placeholder={'Design'}
            name='thietKe'
            onChange={(e) => { onChange(e) }}
          />
          <Input
            label='Pin:'
            value={product.pin}
            placeholder={'pin'}
            name='pin'
            onChange={(e) => { onChange(e) }}
          />

          <Input
            label='Image:'
            value={product.imageurl}
            placeholder={'Image'}
            name='imageurl'
            onChange={(e) => { onChange(e) }}
          />

          <Input
            label='Category:'
            type={'select'}
            placeholder={'Category'}
            value={product.categoryId}
            name='categoryId'
            onChange={(e) => onChange(e)}
          >
            {listCategory.categories.map(option =>
              <option key={option.id} value={option.id}>{option.categoryname}</option>
            )}
          </Input>

          <Input
            label='Brand:'
            type={'select'}
            placeholder={'Brand'}
            value={product.brandId}
            name='brandId'
            onChange={(e) => onChange(e)}
          >
            {listBrand.brands.map(option =>
              <option key={option.id} value={option.id}>{option.brandname}</option>
            )}
          </Input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={props.handleShow}>
            Close
          </Button>
          <Button type="submit" className="btn-save">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalProduct;
