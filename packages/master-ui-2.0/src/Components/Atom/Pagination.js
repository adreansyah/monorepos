import React, { PureComponent } from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types';
import { Icon } from './';

const pageFactory = (value, dotted=false) => ({ value, dotted })
const createRange = (start, end, factory) =>
  _.map(_.range(start, end + 1), page => factory(page, false))

const isSimplePagination = ({ outerRange, innerRange, total }) => {
  const outerRangeSize = 2 * outerRange
  const showDotted = outerRange && outerRange > 0
  const dottedSize = showDotted ? 2 : 0
  const innerRangeSize = 2 * innerRange

  return 1 + dottedSize + innerRangeSize + outerRangeSize >= total
}

const createDottedPrefix = (firstGroupEnd, middleGroupStart, pageFactory) => {
  const prefixPage = middleGroupStart - 1
  const showDotted = prefixPage !== (firstGroupEnd + 1)

  return pageFactory(prefixPage, showDotted)
}

const createDottedSuffix = (middleGroupEnd, lastGroupStart, pageFactory) => {
  const suffixPage = middleGroupEnd + 1
  const showDotted = suffixPage !== (lastGroupStart - 1)

  return pageFactory(suffixPage, showDotted)
}

const createPaginationItem = (page, {innerRange, outerRange, total}) => {
  const showDotted = outerRange && outerRange > 0
  const dottedSize = showDotted ? 1 : 0

  const firstGroupEnd = outerRange
  const firstGroup = createRange(1, firstGroupEnd, pageFactory)

  const lastGroupStart = total + 1 - outerRange
  const lastGroup = createRange(lastGroupStart, total, pageFactory)

  const middleGroupStart = Math.min(
    Math.max(page - innerRange, firstGroupEnd + dottedSize + 1),
    lastGroupStart - dottedSize - 2 * innerRange - 1
  )
  const middleGroupEnd = middleGroupStart + 2 * innerRange
  const middleGroup = createRange(middleGroupStart, middleGroupEnd, pageFactory)

  return [
    ...firstGroup,
    showDotted && createDottedPrefix(firstGroupEnd, middleGroupStart, pageFactory),
    ...middleGroup,
    showDotted && createDottedSuffix(middleGroupEnd, lastGroupStart, pageFactory),
    ...lastGroup
  ]
}

class Pagination extends PureComponent {
  state = {
    page: 1
  }

  static defaultProps = {
    innerRange: 1,
    outerRange: 1,
    activePage: 1,
    total: 10
  }

  static propTypes = {
    innerRange: PropTypes.number,
    outerRange: PropTypes.number,
    activePage: PropTypes.number,
    total: PropTypes.number
  }

  setPage = page => {
    this.setState(
      { page },
      () => this.props.hasOwnProperty('onChange')
        ? this.props.onChange(this.state.page)
        : null
    )
  }

  nextPage = () => {
    if (this.state.page < this.props.total)
      this.setPage(this.state.page + 1)
  }

  prevPage = () => {
    if (this.state.page > 1)
      this.setPage(this.state.page - 1)
  }

  componentDidMount() {
    if (this.props.hasOwnProperty('activePage'))
      this.setState({ page: this.props.activePage })
  }

  render() {
    const { page } = this.state
    const { total, innerRange, outerRange, ...props } = this.props
    const pages = isSimplePagination({ total, innerRange, outerRange })
      ? createRange(1, total, pageFactory)
      : createPaginationItem(page, { total, innerRange, outerRange })

    return (
      <div className={`pagination ${props.className}`}>
        <button onClick={this.prevPage} className="btn u-bd u-bd-light u-p-12 u-mr-8">
          <Icon iwidth="i" name="chevron-left" width="16" height="16" fill="#DCDEE3" />
        </button>
        { pages.map((pageItem, index) => (
          <PaginationItem
            key={index}
            onClick={() => this.setPage(pageItem.value)}
            dotted={pageItem.dotted}
            active={page === pageItem.value}
            value={pageItem.value}
          />
        )) }
        <button onClick={this.nextPage} className="btn u-bd u-bd-light u-p-12">
          <Icon iwidth="i" name="chevron-right" width="16" height="16" fill="#DCDEE3" />
        </button>
      </div>
    )
  }
}

const PaginationItem = ({value=null, dotted=false, active=false, ...props}) => {
  return value && (
    <button
      {...props}
      onClick={dotted ? () => null : props.onClick}
      className={`pagination__item btn ${active ? 'pagination__item--active' : ''}`}
    >
      {dotted ? '...' : value}
    </button>
  )
}

export default Pagination;