import React, { useEffect } from 'react';
import CartList from './../components/CartList';
import CartItem from './../components/CartItem';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

function CartContainer(props) {
    let onUpdateCart=(product, quantityOrder)=>{
        if(quantityOrder===0){
            props.onDeleteCart(product.id, props.token)
        }else{
            props.onUpdateCart(product, quantityOrder, props.token)
        }
    }
    let showProductList=(carts)=>{
        let output=null;
        if(carts.length>0){
            output=carts.map((cart,index)=>{
                return (<CartItem 
                    key={index}
                    cart={cart}
                    onDeleteCart={(id)=>props.onDeleteCart(id, props.token)}
                    onUpdateCart={onUpdateCart}
                />)
            })
        }
        return output;
    }
    useEffect(()=>{
        if(props.user.id){
            props.onFetchCart(props.user.id);
        }
    },[props.user])
    let totalMoney=(carts)=>{
        let output=0;
        if(carts.length>0){
            carts.map((cart,index)=>{
                output+=cart.quantity*cart.price;
            })
        }
        return output;
    }
    return (
        <CartList total={totalMoney(props.carts)}>
            {showProductList(props.carts)}
        </CartList>
    );
}
const mapStateToProps=(state)=>{
    return {
        carts:state.carts,
        user:state.user
    }
}
const mapDispatchToProps=(dispatch, props)=>{
    return{
        onUpdateCart:(product, quantityOrder, token)=>{
            dispatch(actions.actUpdateCartRequest(product, quantityOrder, token))
        },
        onDeleteCart:(id, token)=>{
            dispatch(actions.actDeleteCartRequest(id, token))
        },
        onFetchCart:(id)=>{
            dispatch(actions.actFetchCartRequest(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);