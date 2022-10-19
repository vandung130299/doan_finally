import React from 'react'
import './style.css'
import 'react-toastify/dist/ReactToastify.css';
import NewModal from '../../components/UI/NewModal';
import { Button, Table } from 'react-bootstrap';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';
import { OrderExportPDFData } from './OrderExportPDFData';

const formatCash = (cash) => cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const ModalProduct = (props) => {
    const formatDate = (date) => {
      if (date) {
        const d = new Date(date);
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      }
      return "";
    };
  const handleDownload = () => {
    if (props.orderItem) {
      var dataExport = OrderExportPDFData.getDataExport(props.orderItem);
      console.error('dataExport', dataExport);
      if (dataExport) {
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        pdfMake.createPdf(dataExport).download('Hóa đơn.pdf');
      }
    }
  }

    return (
      <NewModal
        show={true}
        handleClose={props.closeModal}
        modalTitle={'Order Details'}
        size={'xl'}
      >
        <Table variant="parimary" bordered hover size="sm">
          <thead>
            <tr>
              <th></th>
              <th>List product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {props.orderItem.orderItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.productname}</td>
                <td><img width="50px" height="50px" src={item.imageurl} alt={item.productName} /></td>
                <td>{formatCash(item.pricecurrent)} ₫</td>
                <td>{formatCash(item.quantity)}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="2">Pay method : Ship Cod</td>
              {/* <td colSpan="2" className="title">Tổng Tiền: {formatCash(orderItem.totalAmount)} ₫</td> */}
              <td colSpan="2">Order status: {props.orderItem.status}</td>
            </tr>
            <tr>
              <td colSpan="2">Order date: {props.orderItem.orderDate}</td>
              {/* <td colSpan="2" className="title">Tổng Tiền: {formatCash(orderItem.totalAmount)} ₫</td> */}

              <td colSpan="2">Delivery date: {props.orderItem.deliveryDate ? props.orderItem.deliveryDate : `Chưa giao hàng`}</td>
            </tr>
          </tbody>
        </Table>
       <div className='export-pdf'>
        <Button variant='dark' onClick={handleDownload}>
          Export PDF
        </Button>
       </div>
      </NewModal>
    )

}

export default ModalProduct