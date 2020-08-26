import React from "react";

const getPath = (name, color, active) => {
  switch (name) {
    case "basket":
      return (
        <>
          <defs>
            <path
              d="M18.242 6.296h-3v-.94a5.13 5.13 0 10-10.25 0v.94h-3.17a1.8 1.8 0 00-1.79 2.14l1.57 7.55a1.79 1.79 0 001.79 1.45h13.28a1.79 1.79 0 001.75-1.43l1.61-7.57a1.8 1.8 0 00-1.79-2.14zm-11.28-.94a3.13 3.13 0 116.25 0v.94h-6.25v-.94zm3.07 8.92a2.41 2.41 0 110-4.82 2.41 2.41 0 010 4.82z"
              id="prefix__basket"
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <g transform="translate(1.968 2.564)">
              <mask id="prefix__basket_mask" fill="#fff">
                <use xlinkHref="#prefix__basket" />
              </mask>
              <use fill={active ? '#FF7D1D' : color} xlinkHref="#prefix__basket" />
              <circle
                fill={active ? '#FAAD24' : color}
                fillRule="nonzero"
                mask="url(#prefix__basket_mask)"
                cx={14.882}
                cy={3.316}
                r={9.88}
              />
            </g>
          </g>
        </>
      );
    case "category":
      return (
        <>
          <defs>
            <path
              d="M16.92 10.07c.59 0 1.07.48 1.07 1.07v.44c0 .59-.48 1.07-1.07 1.07H7.33c-.59 0-1.07-.48-1.07-1.07v-.44c0-.59.48-1.07 1.07-1.07h9.59zm-12.75 0c.59 0 1.07.48 1.07 1.07v.44c0 .59-.48 1.07-1.07 1.07h-3.1c-.59 0-1.07-.48-1.07-1.07v-.44c0-.59.48-1.07 1.07-1.07h3.1zm12.75-5.03c.59 0 1.07.48 1.07 1.07v.44c0 .59-.48 1.07-1.07 1.07H7.33c-.59 0-1.07-.48-1.07-1.07v-.44c0-.59.48-1.07 1.07-1.07h9.59zm-12.75 0c.59 0 1.07.48 1.07 1.07v.44c0 .59-.48 1.07-1.07 1.07h-3.1C.48 7.62 0 7.14 0 6.55v-.44c0-.59.48-1.07 1.07-1.07h3.1zM16.92 0c.59 0 1.07.48 1.07 1.07v.44c0 .59-.48 1.07-1.07 1.07H7.33c-.59 0-1.07-.48-1.07-1.07v-.44C6.26.48 6.74 0 7.33 0h9.59zM4.17 0c.59 0 1.07.48 1.07 1.07v.44c0 .59-.48 1.07-1.07 1.07h-3.1C.48 2.58 0 2.1 0 1.51v-.44C0 .48.48 0 1.07 0h3.1z"
              id="prefix__category"
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <g transform="translate(3.01 5.67)">
              <mask id="prefix__category_mask" fill="#fff">
                <use xlinkHref="#prefix__category" />
              </mask>
              <use fill={active ? '#FF7D1D' : color} xlinkHref="#prefix__category" />
              <circle
                fill={active ? '#FAAD24' : color}
                fillRule="nonzero"
                mask="url(#prefix__category_mask)"
                cx={13.84}
                cy={0.21}
                r={9.88}
              />
            </g>
          </g>
        </>
      );
    case "home":
      return (
        <>
          <defs>
            <path
              d="M17.738 6.175L9.978.315a1.62 1.62 0 00-1.92 0l-7.84 5.86a.6.6 0 00.44 1.06h.41l1 9.85a1.11 1.11 0 001.18.92h2.52c.42 0 .76-.34.76-.76v-3.54a2.55 2.55 0 012.2-2.58 2.46 2.46 0 012.7 2.44v3.68c0 .42.34.76.76.76h2.52a1.11 1.11 0 001.15-.92l1-9.85h.41a.6.6 0 00.47-1.06z"
              id="prefix__home"
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <g transform="translate(3.022 2.995)">
              <mask id="prefix__home_mask" fill="#fff">
                <use xlinkHref="#prefix__home" />
              </mask>
              <use fill={active ? '#FF7D1D' : color} xlinkHref="#prefix__home" />
              <circle
                fill={active ? '#FAAD24' : color}
                fillRule="nonzero"
                mask="url(#prefix__home_mask)"
                cx={13.828}
                cy={2.885}
                r={9.88}
              />
            </g>
          </g>
        </>
      );
    case "message":
      return (
        <>
          <defs>
            <path
              d="M2.343 3.749a.997.997 0 111.298-1.515l1.358 1.164 4.974 4.264 6.332-5.428a.998.998 0 011.298 1.515l-6.981 5.983a.996.996 0 01-1.299 0L5.833 6.74l-3.49-2.991zM15.956 0H3.989A3.99 3.99 0 000 3.989v7.978a3.99 3.99 0 003.989 3.989h11.967a3.99 3.99 0 003.99-3.989V3.989A3.99 3.99 0 0015.956 0z"
              id="prefix__mail"
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <g transform="translate(2 4)">
              <mask id="prefix__mail_mask" fill="#fff">
                <use xlinkHref="#prefix__mail" />
              </mask>
              <use fill={active ? '#FF7D1D' : color} xlinkHref="#prefix__mail" />
              <circle
                fill={active ? '#FAAD24' : color}
                fillRule="nonzero"
                mask="url(#prefix__mail_mask)"
                cx={14.85}
                cy={1.88}
                r={9.88}
              />
            </g>
          </g>
        </>
      );
    case "my-store":
      return (
        <>
          <defs>
            <path
              d="M16.514 0c.176 0 .34.098.425.249l2.971 5.224a.455.455 0 01.066.241c0 1.176-.71 2.184-1.723 2.629a.216.216 0 01.004.053v8.555c0 .27-.22.49-.49.49H2.204c-.27 0-.49-.22-.49-.49V8.335A2.865 2.865 0 010 5.715c0-.086.024-.168.065-.242L3.033.25A.484.484 0 013.457 0zM8.898 10.478H6.11a.698.698 0 00-.698.698v5.285h4.184v-5.285a.698.698 0 00-.698-.698zm6.057-1.39h-3.091a.5.5 0 00-.5.5v3.092a.5.5 0 00.5.5h3.09a.5.5 0 00.5-.5V9.589a.5.5 0 00-.5-.5z"
              id="prefix__store"
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <g transform="translate(2 3)">
              <mask id="prefix__store_mask" fill="#fff">
                <use xlinkHref="#prefix__store" />
              </mask>
              <use fill={active ? '#FF7D1D' : color} xlinkHref="#prefix__store" />
              <circle
                fill={active ? '#FAAD24' : color}
                fillRule="nonzero"
                mask="url(#prefix__store_mask)"
                cx={14.409}
                cy={3.527}
                r={8.982}
              />
            </g>
          </g>
        </>
      );
    case "product":
      return (
        <>
          <defs>
            <path
              d="M15.83 0a2 2 0 011.987 2.234l-1.647 14A2 2 0 0114.184 18H3.764a2 2 0 01-1.986-1.766l-1.647-14A2 2 0 012.117 0h13.714zM9.204 9.958a.424.424 0 00-.586.128l-.724 1.132-1.3.34a.424.424 0 00-.22.678l.852 1.038-.08 1.342a.424.424 0 00.578.419l1.251-.49 1.251.49a.424.424 0 00.577-.42l-.078-1.34.852-1.04a.424.424 0 00-.22-.678l-1.3-.34-.725-1.13a.424.424 0 00-.128-.129zm2.675-8.37a.53.53 0 00-.53.53v.136a2.51 2.51 0 01-5.02 0v-.136a.53.53 0 10-1.06 0v.136a3.57 3.57 0 007.14 0v-.136a.53.53 0 00-.53-.53z"
              id="prefix__product"
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <g transform="translate(3 3)">
              <mask id="prefix__product_mask" fill="#fff">
                <use xlinkHref="#prefix__product" />
              </mask>
              <use fill={active ? '#FF7D1D' : color} xlinkHref="#prefix__product" />
              <circle
                fill={active ? '#FAAD24' : color}
                fillRule="nonzero"
                mask="url(#prefix__product_mask)"
                cx={13.606}
                cy={1.991}
                r={10.461}
              />
            </g>
          </g>
        </>
      );
    case "profile":
      return (
        <>
          <defs>
            <path
              d="M12.35 10.596a5.65 5.65 0 015.65 5.65 1.75 1.75 0 01-1.75 1.75H1.75A1.75 1.75 0 010 16.246a5.65 5.65 0 015.65-5.65zM7.919.124a4.61 4.61 0 112.118 8.974A4.61 4.61 0 017.919.124z"
              id="prefix__profile"
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <g transform="translate(3 3.004)">
              <mask id="prefix__profile_mask" fill="#fff">
                <use xlinkHref="#prefix__profile" />
              </mask>
              <use fill={active ? '#FF7D1D' : color} xlinkHref="#prefix__profile" />
              <circle
                fill={active ? '#FAAD24' : color}
                fillRule="nonzero"
                mask="url(#prefix__profile_mask)"
                cx={13.85}
                cy={2.876}
                r={9.88}
              />
            </g>
          </g>
        </>
      );
    case "sales":
      return (
        <>
          <defs>
            <path
              d="M18.039 8.344l-1.11-6.32a1.11 1.11 0 00-.89-.9l-6.37-1.1a1.89 1.89 0 00-1.63.52l-7.48 7.48a1.91 1.91 0 000 2.7l6.77 6.77a1.91 1.91 0 002.7 0l7.45-7.47a1.94 1.94 0 00.56-1.68zm-3.425-2.753a1.521 1.521 0 01-2.134-.008 1.491 1.491 0 010-2.117 1.521 1.521 0 012.134-.008 1.493 1.493 0 01-.05 2.133h.05z"
              id="prefix__tag"
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <g transform="translate(3 3)">
              <mask id="prefix__tag_mask" fill="#fff">
                <use xlinkHref="#prefix__tag" />
              </mask>
              <use fill={active ? '#FF7D1D' : color} xlinkHref="#prefix__tag" />
              <circle
                fill={active ? '#FAAD24' : color}
                fillRule="nonzero"
                mask="url(#prefix__tag_mask)"
                cx={13.85}
                cy={2.88}
                r={9.88}
              />
            </g>
          </g>
        </>
      );
    case "wishlist":
      return (
        <>
          <defs>
            <path
              d="M10.521 2.361a.61.61 0 01-1 0 5.56 5.56 0 00-4.52-2.36 4.9 4.9 0 00-5 5c0 3.61 3.58 6.47 8.66 11.45a1.93 1.93 0 002.68 0c5.08-4.98 8.66-7.84 8.66-11.45a4.91 4.91 0 00-5-5 5.55 5.55 0 00-4.48 2.36z"
              id="prefix__wishlist"
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <g transform="translate(1.999 3.999)">
              <mask id="prefix__wishlist_mask" fill="#fff">
                <use xlinkHref="#prefix__wishlist" />
              </mask>
              <use fill={active ? '#FF7D1D' : color} xlinkHref="#prefix__wishlist" />
              <circle
                fill={active ? '#FAAD24' : color}
                fillRule="nonzero"
                mask="url(#prefix__wishlist_mask)"
                cx={14.851}
                cy={1.881}
                r={9.88}
              />
            </g>
          </g>
        </>
      );
    default:
      return false;
  }
}

const SpecialIcons = props => {
  const { name, size, color, active } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        {getPath(name, color, active)}
      </g>
    </svg>
  );
}

export default SpecialIcons;