import React from 'react'
import UseState from './components/UseState'
import UseState2 from './components/UseState2'
import Theme from './components/Theme'
import Theme2 from './components/Theme2'
import Modal from './components/Modal'
import Room from './components/Room'
import CounterParent from './components/CounterParent'
import DropdownParent from './components/DropdownParent'
// import ModalParent from './components/ModalParent'
import FetchUser from './components/FetchUser'
import EvenLogger from './components/EvenLogger'
import NestedDropdown from './components/NestedDropdown'
import AddressParent from './components/AddressParent'
import ResponsiveSlider from './components/ResponsiveSlider/ResponsiveSlider'
import ModalParent from './components/Modal/ModalParent'
import CarouselParent from './components/Carousel/CarouselParent'
import DropDownPaginationParent from './components/DropDownPagination/DropDownPaginationParent'
import Parent from './components/ChildToParentCommunication/Parent'
import Parent1 from './components/ChildToParentCommunication/Parent1'
import PropsDrilling from './components/PropsDrilling/Parent'
import StateLifting from './components/StateLifting/Parent'
import CustomHook from './components/CustomHook/CustomHook'
import ControlledForm from './components/ControlledUncontrolled/ControlledForm'
import UnControlledForm from './components/ControlledUncontrolled/UnControlledForm'
import ParentComponent from './components/ContextAPI/ParentComponent'
import ChildComponent from './components/ContextAPI/ChildComponent'
const App = () => {
  return (
    <div>
      <ParentComponent>
      <ChildComponent />
    </ParentComponent>
    </div>
  )
}

export default App