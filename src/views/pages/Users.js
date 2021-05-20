import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import { useSelector } from 'react-redux';

import UserModal from '../../components/modals/Modal';
import UserForm from '../../components/forms/UserForm';

const Users = ({ history }) => {
  const [showNewUserModal, setNewUserModal] = useState(false);
  const [showEditUserModal, setEditUserModal] = useState(false);

  const { userInfo } = useSelector(state => state.userLogin);

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      const location = {
        pathname: '/login',
        state: { from: '/users' }
      }
      history.push(location);
    }
  }, [history, userInfo])

  const fields = [
    'name',
    'address',
    'email',
    'phone',
    'created at',
    'actions'
  ]

  const hanldleUserModal = () => {
    setNewUserModal(!showNewUserModal);
  }
  const hanldleEditUserModal = () => {
    setEditUserModal(!showEditUserModal);
  }

  return (
    <CRow>
      <CCol md={12}>
        <CCard>
          <CCardHeader>
            <CRow>
              <CCol md="8" lg="10" >
                <h4>Users</h4>
              </CCol>
              <CCol md="4" lg="2" >
                <CButton
                  variant="outline"
                  shape="square"
                  size="md"
                  color="primary"
                  onClick={hanldleUserModal}
                >Add New User</CButton>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              // items={}
              fields={fields}
              responsive
              pagination
              bordered
              sorter
              tableFilter
              itemsPerPage={5}
              scopedSlots={{
                'actions': item => (
                  <td>
                    <CButton
                      variant="outline"
                      shape="square"
                      color="info"
                      size="sm"
                      className="mr-3"
                      onClick={hanldleEditUserModal}
                    >
                      <CIcon name="cil-pencil" size="sm"></CIcon>
                    </CButton>
                    <CButton
                      variant="outline"
                      shape="square"
                      color="info"
                      size="sm"
                    >
                      <CIcon name="cil-trash" size="sm"></CIcon>
                    </CButton>
                  </td>
                )
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>

      {/* Modal For Adding a User */}
      {
        showNewUserModal
          ? <UserModal
            show={showNewUserModal}
            toggle={hanldleUserModal}
            body={<UserForm />}
            btnText="Add User"
            headerText="Add New User"
          />
          : null
      }

      {/* Modal For Editing a User */}
      {
        showEditUserModal
          ? <UserModal
            show={showEditUserModal}
            toggle={hanldleEditUserModal}
            body={<UserForm isEditForm />}
            btnText="Edit User"
            headerText="Edit User"
          />
          : null
      }
    </CRow>
  )
}

export default Users
