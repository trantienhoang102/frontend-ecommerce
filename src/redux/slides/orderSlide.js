import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderItems: [],
    orderItemsSelected: [],
    shippingAddress: {

    },
    paymentMethod: '',
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
    user: '',
    isPaid: false,
    paidAt: '',
    deliveredAt: '',
    // isErrorOrder: false,
    isSuccessOrder: false,

}

export const orderSlide = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrderTotalPrice: (state, action) => {
            const { priceMemo, totalPriceMemo } = action.payload
            state.itemsPrice = priceMemo
            state.totalPrice = totalPriceMemo
        },
        addOrderProduct: (state, action) => {
            const { orderItem } = action.payload
            const itemOrder = state?.orderItems?.find((item) => item?.product === orderItem.product)
            if (itemOrder) {
                if (itemOrder.amount <= itemOrder.countInStock) {
                    itemOrder.amount += orderItem?.amount
                    state.isSuccessOrder = true
                    state.isErrorOrder = false
                }
            } else {
                state.orderItems.push(orderItem)
            }
        },
        resetOrder: (state) => {
            // state.isErrorOrder = false
            state.isSuccessOrder = false
        },
        increaseAmount: (state, action) => {
            const { idProduct } = action.payload
            const itemOrder = state?.orderItems?.find((item) => item?.product === idProduct)
            const itemOrderSelected = state?.orderItemsSelected?.find((item) => item?.product === idProduct)
            itemOrder.amount++;
            if (itemOrderSelected) {
                itemOrderSelected.amount++
            }
        },
        decreaseAmount: (state, action) => {
            const { idProduct } = action.payload
            const itemOrder = state?.orderItems?.find((item) => item?.product === idProduct)
            const itemOrderSelected = state?.orderItemsSelected?.find((item) => item?.product === idProduct)
            itemOrder.amount--;
            if (itemOrderSelected) {
                itemOrderSelected.amount--
            }
        },
        removeOrderProduct: (state, action) => {
            const { idProduct } = action.payload
            const itemOrder = state?.orderItems?.filter((item) => item?.product !== idProduct)
            const itemOrderSelected = state?.orderItemsSelected?.filter((item) => item?.product !== idProduct)

            state.orderItems = itemOrder
            state.orderItemsSelected = itemOrderSelected

        },
        removeAllOrderProduct: (state, action) => {
            const { listChecked } = action.payload
            const itemOrders = state?.orderItems?.filter((item) => !listChecked.includes(item.product))
            const itemOrderSelected = state?.orderItems?.filter((item) => !listChecked.includes(item.product))
            state.orderItems = itemOrders
            state.orderItemsSelected = itemOrderSelected
        },
        selectedOrder: (state, action) => {
            const { listChecked } = action.payload
            const orderSelected = []
            state.orderItems.forEach((order) => {
                if (listChecked.includes(order.product)) {
                    orderSelected.push(order)
                };
            });
            state.orderItemsSelected = orderSelected
        }
    },
})

export const { resetOrder, addOrderTotalPrice, addOrderProduct, increaseAmount, decreaseAmount, removeOrderProduct, removeAllOrderProduct, selectedOrder, } = orderSlide.actions

export default orderSlide.reducer