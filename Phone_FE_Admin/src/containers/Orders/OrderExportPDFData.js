import moment from 'moment';
import { formatVnd } from '../../helpers/formatMoney';
const OrderExportPDFData = {
  getDataExport: (orderItem) => {
    console.log('orderItem: ', orderItem);
    // Show list items
    var currentNo = 0;
    var today = new Date();
    var itemRows = [
      [
        { text: '\nSTT', style: 'tableHeader', alignment: 'center' },
        { text: 'Tên sản phẩm', style: 'tableHeader', alignment: 'center' },
        { text: 'Giá sản phẩm', style: 'tableHeader', alignment: 'center' },
        { text: 'Số Lượng', style: 'tableHeader', alignment: 'center' }
      ]
    ];
    orderItem.orderItems.map(item => {
      currentNo++;
      itemRows.push([
        { text: currentNo, alignment: 'center' },
        orderItem.fullname ? orderItem.fullname : "Khách vãn lai",
        { text: formatVnd(item.pricecurrent), alignment: 'center' },
        { text: Math.abs(item.quantity), alignment: 'center' }])
    });
    itemRows.push([
      { text: "Tổng Tiền: ", colSpan: 3, alignment: 'right', bold: true },
      {},
      {},
      { text: formatVnd(orderItem.totalmoney), bold: true }]);



    var tableItems = {
      style: 'tableExample',
      headerRows: 1,
      table: {
        widths: ['10%', '30%', '30%', '30%'],
        body: itemRows
      },
      layout: {
        fillColor: function (rowIndex, node, columnIndex) {
          return (rowIndex === 0) ? '#00483d' : null;
        }
      }
    },

      saleObject = {
        content: [
          {
            columns: [
              {
                width: 'auto',
                text: [
                  { text: 'Công ty The Phone Shop', bold: true, fontSize: 12 },
                  '\n MST    : 0123456789',
                  '\n Địa chỉ: Số 97, Đường Man Thiện, Phường Hiệp Phú ',
                  '\n TP Thủ Đức, TP. HCM. ',
                  '\n Email  : cobebandiem@gmail.com',
                  '\n Điện thoại : 0944748742'], fontSize: 11, alignment: 'left'
              },
              {
                margin: [60, 15, 0, 0],
                text: 'Mẫu số C6-12/NS'
                  + '\n (TT số 77/2017/TT-BTC- '
                  + '\n ngày 28/7/2017 của '
                  + '\n Bộ Tài Chính ) ', fontSize: 11, alignment: 'left'
              },

            ]

          },

          {
            columns: [
              { text: '\n Mã đơn hàng: ' + orderItem.id, bold: true, fontSize: 14, alignment: 'right' },
            ]
          },

          {
            columns: [
              { text: '\n PHIẾU XUẤT KHO', bold: true, fontSize: 22, alignment: 'center' },
            ]
          },
          {
            columns: [
              { text: 'Ngày ' + moment(today).format("LL"), alignment: 'center', fontSize: 11, italics: true },

            ]
          },
          {
            text: [
              '\n Người nhận: ', { text: orderItem.fullname ? orderItem.fullname : '..........' },
              '\n Số điện thoại:', { text: orderItem.phone },
              '\n Nơi gửi: ', { text: '97 Man Thiện Phường Hiệp Phú Quận 9 HCM' },
              '\n Địa Chỉ Giao Hàng:', { text: orderItem.address }
            ]
          },
          { text: '\n\n' },
          tableItems,
          { text: '\n\n\n' },

          {
            columns: [
              { text: 'Xuất ngày ' + moment(today).format("LL"), alignment: 'right', bold: true, fontSize: 11, italics: true },

            ]
          },
          { text: '\n' },
          {
            style: 'tableExample',
            table: {
              widths: ['*', '*', 'auto'],
              body: [
                [
                  {
                    text: [
                      { text: 'Người gửi\n', bold: true, alignment: 'center' },
                      { text: '(Ký, họ tên)', fontSize: 10, italics: true, alignment: 'center' }
                    ]
                  },
                  {
                    text: [
                      { text: 'Người nhận\n', bold: true, alignment: 'center' },
                      { text: '(Ký, họ tên)', fontSize: 10, italics: true, alignment: 'center' }
                    ]
                  },
                  {
                    text: [
                      { text: 'Người Vận Chuyển\n', bold: true, alignment: 'center', whiteSpace: 'nowrap' },
                      { text: '(Ký, họ tên)', fontSize: 10, italics: true, alignment: 'center' }

                    ]
                  }
                ]
              ]
            },
            layout: 'noBorders'
          },
          // {
          //   style: 'tableExample',
          //   table: {
          //     // widths: ['*', '*', '*', '*', 'auto'],
          //     body: [
          //       [
          //         {
          //           columns: [
          //             saleObject.paymentStatus == "DA_DUYET_THANH_TOAN" && state.daThanhToanLabelPng ? {
          //               image: state.daThanhToanLabelPng,
          //               fit: [500, 150],
          //               alignment: 'center',
          //               margin: [20, 0, 0, 0],
          //               opacity: 0.5,
          //             } : null,
          //           ]
          //         },
          //       ]
          //     ]
          //   },
          //   layout: 'noBorders'
          // },




        ],
        styles: {
          header: {
            fontSize: 15,
            bold: true,
            margin: [0, 0, 0, 10]
          },
          subheader: {
            fontSize: 13,
            bold: true,
            margin: [0, 10, 0, 5]
          },
          tableExample: {
            margin: [0, 0, 0, 0]
          },
          tableHeader: {
            bold: true,
            fontSize: 11,
            color: 'black'
          }
        },
        defaultStyle: {
          columnGap: 10
        },
      }

    return saleObject;
  }
}
export { OrderExportPDFData };



