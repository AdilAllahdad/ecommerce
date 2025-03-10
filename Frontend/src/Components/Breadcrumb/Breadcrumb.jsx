import React from 'react'

export const Breadcrumb = (props) => {
const {product} = props;
  return (
    <>
<p>{`HOME > SHOP > ${product.category} > ${product.name}`}</p>
    </>
  )
}
