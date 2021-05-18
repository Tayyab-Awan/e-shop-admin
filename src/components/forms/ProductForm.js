import React, { useState } from 'react'
import {
    CContainer,
    CRow,
    CCol,
    CForm,
    CFormGroup,
    CLabel,
    CInput,
    CSelect,
    CSwitch
} from "@coreui/react";

const ProductForm = () => {
    const [isActiveProduct, setActiveProduct] = useState(true);

    return (
        <CContainer fluid>
            <CRow>
                <CCol sm="12">
                    <CForm >
                        <CFormGroup>
                            <CLabel htmlFor="productName">Name</CLabel>
                            <CInput
                                type="text"
                                id="productName"
                                name="productName"
                                placeholder="Enter Product Name"
                            />
                        </CFormGroup>
                        <CFormGroup className="d-flex align-items-center">
                            <CSwitch
                                className="mr-3"
                                id="isProductActive"
                                color="primary"
                                size="sm"
                                shape="pill"
                                checked={isActiveProduct}
                                onChange={() => setActiveProduct(!isActiveProduct)}
                            />
                            <CLabel
                                htmlFor="isProductActive"
                                style={{ height: '10px' }}
                            >{isActiveProduct ? "Active" : "Not Active"}</CLabel>

                        </CFormGroup>
                        <CRow>
                            <CCol sm="6" lg="6">
                                <CFormGroup>
                                    <CLabel htmlFor="category">Category</CLabel>
                                    <CSelect aria-label="Select a category">
                                        <option defaultValue>Select a category</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CSelect>
                                </CFormGroup>
                            </CCol>
                            <CCol sm="6" lg="6">
                                <CFormGroup>
                                    <CLabel htmlFor="brand">Brand</CLabel>
                                    <CSelect aria-label="Select a brand">
                                        <option defaultValue>Select a brand</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CSelect>
                                </CFormGroup>
                            </CCol>

                        </CRow>
                        <CFormGroup>
                            <CLabel htmlFor="description">Description</CLabel>
                            <textarea
                                className="form-control"
                                id="description"
                                rows="3"></textarea>
                        </CFormGroup>
                        <CRow>
                            <CCol sm="6" lg="6">
                                <CFormGroup>
                                    <CLabel>Price</CLabel>
                                    <CInput
                                        type="number"
                                        id="price"
                                        name="price"
                                        placeholder="Enter Product Price"
                                    />
                                </CFormGroup>
                            </CCol>
                            <CCol sm="6" lg="6">
                                <CFormGroup>
                                    <CLabel>Stock</CLabel>
                                    <CInput
                                        type="number"
                                        id="stock"
                                        name="stock"
                                        placeholder="Enter Product Stock"
                                    />
                                </CFormGroup>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol sm="6" lg="6">
                                <CFormGroup>
                                    <CLabel>Unit</CLabel>
                                    <CInput
                                        type="number"
                                        id="unit"
                                        name="price"
                                        placeholder="Enter Product Unit"
                                    />
                                </CFormGroup>
                            </CCol>
                            <CCol sm="6" lg="6">
                                <CFormGroup>
                                    <CLabel>Weight</CLabel>
                                    <CInput
                                        type="number"
                                        id="weight"
                                        name="stock"
                                        placeholder="Enter Product Weight"
                                    />
                                </CFormGroup>
                            </CCol>
                        </CRow>
                        <CFormGroup>
                            <CLabel>Image</CLabel>
                            <CInput
                                type="file"
                                id="productImage"
                                name="productImage"
                                placeholder="Select Product Image"
                            />
                        </CFormGroup>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default ProductForm
