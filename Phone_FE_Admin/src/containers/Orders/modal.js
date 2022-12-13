import React, { useEffect } from 'react'
import './style.css'
import 'react-toastify/dist/ReactToastify.css';
import NewModal from '../../components/UI/NewModal';
import { Button, Table } from 'react-bootstrap';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';
import { OrderExportPDFData } from './OrderExportPDFData';
import { formatVnd } from '../../helpers/formatMoney';
import axiosInstance from '../../helpers/axios';
import { getAllOrder } from '../../actions';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';


const ModalProduct = (props) => {
  const dispatch = useDispatch();
  const optionsOrderStatus = ['pending', 'confirm', 'delivery', 'cancel'];
  const handleDownload = () => {
    if (props.orderItem) {
      var dataExport = OrderExportPDFData.getDataExport(props.orderItem);
      if (dataExport) {
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        pdfMake.createPdf(dataExport).download('Hóa đơn.pdf');
      }
    }
  }

  const handleStatusOrder = () => {
    const index = optionsOrderStatus.findIndex(item => item === props.orderItem.status);
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const deliveryDate = date + ' ' + time;
    const payload = {
      status: optionsOrderStatus[index + 1],
      deliveryDate
    };
    axiosInstance.post(`/order/${props.orderItem.id}`, payload).then(res => {
      if (res.status === 200) {
        dispatch(getAllOrder());
        toast.success('Update order success!');
      } else {
        toast.error('Can\'t delete order!');
      }
    }).catch(error => {
      toast.error('Can\'t delete order!');
    });
    props.closeModal();
  }
  const indexStatus = optionsOrderStatus.findIndex(status => {
    return status === props.orderItem.status;
  })
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
            <th>STT</th>
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
              <td>{formatVnd(item.pricecurrent)}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={5}>Totlal price: <span>{formatVnd([props.orderItem.totalmoney])} </span></td>
          </tr>
        </tbody>
      </Table>
      <div className='export-pdf'>
        <Button variant='outline-dark' onClick={handleDownload}>
          <i className="fa-solid fa-print" style={{ paddingRight: 10 }}></i>
          Export PDF
        </Button>
        {(props.orderItem.status != optionsOrderStatus[2] && props.orderItem.status != optionsOrderStatus[3]) ? <Button className='btn-save' style={{ marginLeft: 10 }} onClick={handleStatusOrder}>
          <i className="fa-solid fa-arrow-right" style={{ paddingRight: 10 }}></i>
          To {optionsOrderStatus[indexStatus + 1]}
        </Button> : ''}
      </div>
    </NewModal>
  )

}

export default ModalProduct