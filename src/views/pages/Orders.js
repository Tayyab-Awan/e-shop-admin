import React from "react";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CContainer,
    CButton,
} from "@coreui/react";
import CIcon from '@coreui/icons-react'

const Orders = () => {
    const fields = [
        'id',
        'user',
        'paymentMethod',
        'totalPrice',
        'isPaid',
        'isDelivered',
        'actions'
    ]

    return (
        <CContainer>
            <CCol lg="12">
                <CCard>
                    <CCardHeader>
                        <h4>Orders</h4>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            // items={}
                            fields={fields}
                            bordered
                            sorter
                            tableFilter
                            responsive
                            itemsPerPage={5}
                            pagination
                            scopedSlots={{
                                actions: (item) => (
                                    <td>
                                        <CButton
                                            className="mr-3"
                                            variant="outline"
                                            shape="square"
                                            color="info"
                                            size="sm"
                                        >
                                            <CIcon name="cil-pencil" size="sm"></CIcon>
                                        </CButton>
                                        <CButton
                                            variant="outline"
                                            color="info"
                                            shape="square"
                                            size="sm">
                                            <CIcon name="cil-trash" size="sm"></CIcon>
                                        </CButton>
                                    </td>
                                ),
                            }}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CContainer>
    );
};

export default Orders;
