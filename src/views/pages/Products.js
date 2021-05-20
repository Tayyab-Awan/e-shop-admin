import React, { useState, useEffect } from "react";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CContainer,
    CRow,
    CButton,
} from "@coreui/react";
import CIcon from '@coreui/icons-react';
import { useSelector } from 'react-redux';
import ProductModal from '../../components/modals/Modal';
import ProductForm from '../../components/forms/ProductForm';

const Products = ({ history }) => {
    const [showProductModal, setProductModal] = useState(false);
    const [showEditProductModal, setEditProductModal] = useState(false);

    const { userInfo } = useSelector(state => state.userLogin)
    useEffect(() => {
        if (!userInfo || !userInfo.isAdmin) {
            const location = {
                pathname: '/login',
                state: { from: '/products' }
            }

            history.push(location)
        }
    }, [history, userInfo])

    const hanldleProductModal = () => {
        setProductModal(!showProductModal);
    }
    const hanldleEditProductModal = () => {
        setEditProductModal(!showEditProductModal)
    }

    const fields = [
        'name',
        'image',
        'brand',
        'category',
        'description',
        'price',
        'stock',
        'actions'
    ]

    return (
        <CContainer>
            <CCol lg="12">
                <CCard>
                    <CCardHeader>
                        <CRow>
                            <CCol md="8" lg="10" >
                                <h4>Products</h4>
                            </CCol>
                            <CCol md="4" lg="2" >
                                <CButton
                                    variant="outline"
                                    shape="square"
                                    size="md"
                                    color="primary"
                                    onClick={hanldleProductModal}
                                >Add New Product</CButton>
                            </CCol>
                        </CRow>
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
                                            onClick={hanldleEditProductModal}
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

            {/* Modal For Adding New Product */}
            {
                showProductModal
                    ? <ProductModal
                        show={showProductModal}
                        toggle={hanldleProductModal}
                        body={<ProductForm />}
                        btnText="Add Product"
                        headerText="Add New Product"
                    />
                    : null
            }

            {/* Modal For Editing a Product */}
            {
                showEditProductModal
                    ? <ProductModal
                        show={showEditProductModal}
                        toggle={hanldleEditProductModal}
                        body={<ProductForm />}
                        btnText="Edit Product"
                        headerText="Edit Product"
                    />
                    : null
            }

        </CContainer>
    );
};

export default Products;
