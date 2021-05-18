import React, { useState } from 'react'
import {
    CContainer,
    CRow,
    CCol,
    CForm,
    CFormGroup,
    CLabel,
    CInput,
    CSwitch
} from "@coreui/react";

const UserForm = ({ isEditForm = false }) => {
    const [isAdmin, setAdmin] = useState(false);

    return (
        <CContainer fluid>
            <CRow>
                <CCol sm="12">
                    <CForm >
                        <CFormGroup>
                            <CLabel htmlFor="userName">Name</CLabel>
                            <CInput
                                type="text"
                                id="userName"
                                name="userName"
                                placeholder="Enter User Name"
                            />
                        </CFormGroup>
                        <CFormGroup className="d-flex align-items-center">
                            <CSwitch
                                className="mr-3"
                                id="isAdmin"
                                color="primary"
                                size="sm"
                                shape="pill"
                                checked={isAdmin}
                                onChange={() => setAdmin(!isAdmin)}
                            />
                            <CLabel
                                htmlFor="isAdmin"
                                style={{ height: '10px' }}
                            >{isAdmin ? "Admin" : "Not Admin"}</CLabel>

                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="email">Email</CLabel>
                            <CInput
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                            />
                        </CFormGroup>
                        <CFormGroup>
                            <CLabel htmlFor="address">Address</CLabel>
                            <textarea
                                className="form-control"
                                id="address"
                                rows="3"></textarea>
                        </CFormGroup>
                        <CRow>
                            <CCol sm="6" lg="6">
                                <CFormGroup>
                                    <CLabel htmlFor="newPassword">
                                        {isEditForm ? "New Password" : "Password"}
                                    </CLabel>
                                    <CInput
                                        type="password"
                                        id="newPassword"
                                        name="newPassword"
                                        placeholder="Enter Password"
                                    />
                                </CFormGroup>
                            </CCol>
                            <CCol sm="6" lg="6">
                                <CFormGroup>
                                    <CLabel htmlFor="confirmPassword">Confirm Password</CLabel>
                                    <CInput
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                    />
                                </CFormGroup>
                            </CCol>
                        </CRow>
                        <CFormGroup>
                            <CLabel>Image</CLabel>
                            <CInput
                                type="file"
                                id="userImage"
                                name="userImage"
                                placeholder="Select User Profile Image"
                            />
                        </CFormGroup>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    )
}


export default UserForm
