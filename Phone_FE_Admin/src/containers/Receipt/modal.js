import React from 'react'
import './style.css'
import 'react-toastify/dist/ReactToastify.css';
import NewModal from '../../components/UI/NewModal';
import { Button, Table } from 'react-bootstrap';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';
import { formatVnd } from '../../helpers/formatMoney';
// import { OrderExportPDFData } from './OrderExportPDFData';

const ModalViewReceipt = (props) => {
  // const handleDownload = () => {
  //   if (props.receiptDetail) {
  //     var dataExport = OrderExportPDFData.getDataExport(props.receiptDetail);
  //     console.error('dataExport', dataExport);
  //     if (dataExport) {
  //       pdfMake.vfs = pdfFonts.pdfMake.vfs;
  //       pdfMake.createPdf(dataExport).download('Hóa đơn.pdf');
  //     }
  //   }
  // }

  return (
    <NewModal
      show={true}
      handleClose={props.closeModal}
      modalTitle={'Receipt Details'}
      size={'xl'}
    >
      <Table variant="parimary" bordered hover size="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>List product</th>
            <th>Image</th>
            <th>Amount</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.receiptItem.receiptItems.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.productname}</td>
              <td><img width="50px" height="50px" src={item.imageurl} alt={item.productName} /></td>
              <td>{formatVnd(item.pricereceipt)}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={5}>Totlal price: <span>{formatVnd([props.receiptItem.totalmoney])} </span></td>
          </tr>
        </tbody>
      </Table>
      {/* <div className='export-pdf'>
        <Button variant='outline-dark' onClick={handleDownload}>
          <i className="fa-solid fa-print" style={{ paddingRight: 10 }}></i>
          Export PDF
        </Button>
      </div> */}
    </NewModal>
  )

}

export default ModalViewReceipt