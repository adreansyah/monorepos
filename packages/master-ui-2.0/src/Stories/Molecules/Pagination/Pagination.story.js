import React, {useState} from 'react';
import { Pagination } from '../../../Components/Molecules';
import mdx from './Pagination.mdx'

export default {
  title: "Molecules/Pagination",
  component: Pagination,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Short = () => {
  const [initPage, setInitpage] = useState(4);
  return (
    <Pagination
      className="u-mb-20"
      innerRange={2}
      total={5}
      initialPage={initPage}
      onChange={page => setInitpage(page)}
    />
  )
}
export const Long = () => {
  const [initPage, setInitpage] = useState(1);
  return (
    <Pagination
      className="u-mb-20"
      innerRange={2}
      outerRange={1}
      total={50}
      initialPage={initPage}
      onChange={page => setInitpage(page)}
    />
  )
}
