import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeSidebarState } from '../actions/layoutAction'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)
  const handleSideBar = (val) => {
    console.log('show: ', show)
    console.log('sidebar val: ', val)
    dispatch(changeSidebarState(val))
  }
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => handleSideBar(val)}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <img
          className="mr-3 pb-2"
          src="https://img.icons8.com/color/48/000000/shop.png" alt="e-shop" />
        <h3 className="mt-3 pb-2">E-Shop</h3>
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
