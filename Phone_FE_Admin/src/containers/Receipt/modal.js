import React from 'react'
import './style.css'
import 'react-toastify/dist/ReactToastify.css';
import NewModal from '../../components/UI/NewModal';
import { Button, Table } from 'react-bootstrap';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';
// import { OrderExportPDFData } from './OrderExportPDFData';

const formatCash = (cash) => cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const ModalReceipt = (props) => {
    const formatDate = (date) => {
      if (date) {
        const d = new Date(date);
        return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      }
      return "";
    };
  const handleDownload = () => {
    // if (props.receiptDetail) {
    //   var dataExport = OrderExportPDFData.getDataExport(props.receiptDetail);
    //   console.error('dataExport', dataExport);
    //   if (dataExport) {
    //     pdfMake.vfs = pdfFonts.pdfMake.vfs;
    //     pdfMake.createPdf(dataExport).download('Hóa đơn.pdf');
    //   }
    // }
  }

    return (
      <NewModal
        show={true}
        handleClose={props.closeModal}
        modalTitle={'Receipt Details'}
        size={'xl'}
      >
        <Table variant="parimary">
          <thead>
              <tr>
                  <th className="title"></th>
                  <th className="title">Product name</th>
                  <th className="title">Image</th>
                  <th className="title">Price</th>
                  <th className="title">Quantity</th>
              </tr>
          </thead>
          <tbody>
              {props.receiptDetail.receiptItems.map((item, index) => (
                <tr key={index}>
                  <td className="value">{index + 1}</td>
                  <td className="value">{item.productname}</td>
                  <td className="value"><img width="50px" height="50px" src={item.imageurl} alt={item.productname} /></td>
                  <td className="value">{formatCash(item.pricereceipt)} ₫</td>
                  <td className="value">{item.quantity}</td>
                </tr>
              ))}
          </tbody>
        </Table>
       {/* <div className='export-pdf'>
        <Button variant='dark' onClick={handleDownload}>
          Export PDF
        </Button>
       </div> */}
      </NewModal>
    )

}

export default ModalReceipt