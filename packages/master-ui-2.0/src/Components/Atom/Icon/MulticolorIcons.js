import React from "react";

const getPath = (size, name, active) => {
  switch (name) {
    case "announcement":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path
              d="M20.094 6.072c.022.083.041.167.056.252l1.159 6.572a2.857 2.857 0 01-2.934 3.35l-8.047-.338.49 2.776a.714.714 0 01-.163.591l-.076.076a.714.714 0 01-1.007-.078L6.557 15.75l-.75-.031a2.857 2.857 0 01-2.694-2.359l-.496-2.812a2.857 2.857 0 012.066-3.254l11.905-3.23a2.857 2.857 0 013.506 2.008z"
              fill="#DCDEE3"
              fillRule="nonzero"
            />
            <path
              d="M7.438 10.564a1 1 0 11.347 1.97 1 1 0 01-.347-1.97zm4.581-.808a1 1 0 11.348 1.97 1 1 0 01-.348-1.97zm4.924-.868a1 1 0 11.348 1.97 1 1 0 01-.348-1.97z"
              fill="#70727D"
              fillRule="nonzero"
            />
          </g>
        </svg >
      );
    case "cash":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path
              d="M15.079 9.632c.817 0 1.542.523 1.798 1.299l2.51 7.579A1.895 1.895 0 0117.59 21H5.894a1.895 1.895 0 01-1.799-2.49l2.51-7.58c.257-.775.982-1.298 1.799-1.298h6.675zM14.767 3a1.895 1.895 0 011.709 2.714l-.908 1.894a1.895 1.895 0 01-1.709 1.076H9.435c-.729 0-1.393-.418-1.708-1.076l-.908-1.894A1.895 1.895 0 018.527 3h6.24z"
              fill="#DCDEE3"
              fillRule="nonzero"
            />
            <path
              d="M11.948 12.672c.248.045.465.117.652.216.187.099.344.21.47.337.126.127.222.26.288.398.066.14.103.27.114.39a.168.168 0 01-.057.148.217.217 0 01-.148.057h-.53c-.086 0-.15-.016-.194-.05a.507.507 0 01-.117-.132.986.986 0 00-.345-.33c-.154-.093-.383-.14-.686-.14-.131 0-.256.014-.375.042a1.078 1.078 0 00-.31.121.642.642 0 00-.21.194.454.454 0 00-.075.257c0 .116.028.211.083.284a.651.651 0 00.27.19c.123.053.282.102.477.148.194.045.43.098.708.159.304.066.56.143.77.231.21.088.381.195.515.318.134.124.23.267.288.429.058.161.087.346.087.553a1.355 1.355 0 01-.443 1.015c-.144.137-.32.25-.527.341-.207.091-.442.155-.705.19v.515c0 .056-.02.104-.06.144a.197.197 0 01-.144.06h-.614a.197.197 0 01-.144-.06.197.197 0 01-.06-.144v-.515a2.753 2.753 0 01-.641-.178 2.113 2.113 0 01-.523-.307 1.498 1.498 0 01-.36-.42 1.17 1.17 0 01-.152-.528.168.168 0 01.057-.147.217.217 0 01.148-.057h.53c.086 0 .152.015.197.045.046.03.084.076.114.137.035.065.078.131.129.197.05.065.119.124.204.174.086.05.194.092.323.125.128.033.289.05.48.05.152 0 .299-.012.44-.035.142-.022.266-.06.372-.113a.793.793 0 00.257-.197.439.439 0 00.099-.292.37.37 0 00-.106-.273.85.85 0 00-.322-.182 4.48 4.48 0 00-.535-.144 20.09 20.09 0 01-.735-.174 3.933 3.933 0 01-.663-.216 1.562 1.562 0 01-.47-.307 1.149 1.149 0 01-.276-.428c-.061-.165-.091-.36-.091-.588 0-.197.038-.379.113-.545.076-.167.181-.318.315-.451.134-.134.294-.245.481-.334.187-.088.392-.153.614-.193v-.516c0-.055.02-.103.06-.144.041-.04.09-.06.145-.06h.614c.055 0 .103.02.144.06.04.04.06.089.06.144v.531z"
              fill="#70727D"
              fillRule="nonzero"
            />
          </g>
        </svg >
      );
    case "exchange":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1, 2)">
              <path d="M-1-2h24v24H-1z" />
              <path
                d="M17 0a4 4 0 014 4v7a4.002 4.002 0 01-2.833 3.827A5.502 5.502 0 0012.707 10H6V4a4 4 0 014-4h7z"
                fill="#DCDEE3"
                fillRule="nonzero"
              />
              <path
                d="M5.59 14.828a1 1 0 01-1.415 1.415l-2.828-2.829a2 2 0 010-2.828l2.828-2.829A1 1 0 115.59 9.172l-1.828 1.827 8.947.001a4.5 4.5 0 014.495 4.288l.005.212a4.5 4.5 0 01-4.5 4.5h-4.29a1 1 0 010-2h4.29a2.5 2.5 0 000-5H3.76z"
                fill="#70727D"
                fillRule="nonzero"
              />
            </g>
          </g>
        </svg >
      );
    case "order":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path
              d="M16.5 3.5a3 3 0 013 3v12a3 3 0 01-3 3h-9a3 3 0 01-3-3v-12a3 3 0 013-3h1v1a1 1 0 001 1h5a1 1 0 001-1v-1h1z"
              fill="#DCDEE3"
              fillRule="nonzero"
            />
            <path
              d="M15.487 13.498a1 1 0 010 2H8.49a1 1 0 110-2h6.997zM13.49 9.501a1 1 0 010 2h-5a1 1 0 010-2h5zM13.5 2a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h3z"
              fill="#70727D"
              fillRule="nonzero"
            />
          </g>
        </svg >
      );
    case "pin-location":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path
              d="M19.989 9.178C19.544 5.095 16.088 2 11.969 2c-4.094.032-7.515 3.118-7.958 7.178v.08a8.824 8.824 0 000 .89 8.188 8.188 0 002.857 6.227 22.562 22.562 0 014.811 5.419.401.401 0 00.702 0 22.562 22.562 0 014.811-5.419 8.188 8.188 0 002.797-6.228 8.824 8.824 0 000-.89v-.08z"
              fill="#DCDEE3"
              fillRule="nonzero"
            />
            <path
              d="M12 5a5 5 0 110 10 5 5 0 010-10zm0 3a2 2 0 100 4 2 2 0 000-4z"
              fill="#70727D"
              fillRule="nonzero"
            />
          </g>
        </svg >
      );
    case "qna":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path
              d="M18.3 6.6l.196.004A2.7 2.7 0 0121.04 9.3v9.96a.7.7 0 01-1.2.5l-2.4-2.4h-8.1a2.7 2.7 0 01-2.7-2.7h9A2.66 2.66 0 0018.3 12V6.6zM13.8 3a2.7 2.7 0 012.7 2.7v4.5a2.7 2.7 0 01-2.7 2.7H6.6l-2.4 2.4a.7.7 0 01-1.2-.5V5.7A2.7 2.7 0 015.7 3z"
              fill="#DCDEE3"
              fillRule="nonzero"
            />
            <path
              d="M6.64 12.899v-5.3a1 1 0 011-1h8.86v3.8a2.5 2.5 0 01-2.5 2.5H6.64z"
              fill="#70727D"
            />
          </g>
        </svg >
      );
    case "review":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path
              d="M18 4a3 3 0 013 3v7.5a3 3 0 01-3 3h-3.41l-2.18 3.123a.5.5 0 01-.82 0L9.41 17.5H6a3 3 0 01-3-3V7a3 3 0 013-3h12z"
              fill="#DCDEE3"
              fillRule="nonzero"
            />
            <path
              d="M12 13.316l-1.624.636a.5.5 0 01-.681-.495l.102-1.741-1.106-1.348a.5.5 0 01.26-.801l1.687-.441.941-1.469a.5.5 0 01.842 0l.94 1.469 1.688.44a.5.5 0 01.26.802l-1.106 1.348.102 1.74a.5.5 0 01-.68.496L12 13.316z"
              fill="#70727D"
              fillRule="nonzero"
            />
          </g>
        </svg >
      );
    case "send-item":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <rect
              fill="#DCDEE3"
              fillRule="nonzero"
              x={3}
              y={3}
              width={18}
              height={18}
              rx={4}
            />
            <path
              d="M14.93 7.78a1 1 0 011.29 1.29l-2.845 7.539a.907.907 0 01-1.709-.034l-.74-2.222a.5.5 0 01.033-.392L12 12l-1.996 1.033a.5.5 0 01-.388.03l-2.208-.734a.9.9 0 01-.033-1.698zM15 3v1.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5V3h6z"
              fill="#70727D"
              fillRule="nonzero"
            />
          </g>
        </svg >
      );
    case "setting":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path
              d="M18.71 12.38v-.76a1 1 0 01.4-.83l1.48-1.16a.46.46 0 00.11-.57l-1.8-3.12a.45.45 0 00-.55-.19l-1.73.69a1.05 1.05 0 01-1-.12 6.22 6.22 0 00-.53-.32 1.05 1.05 0 01-.58-.79l-.27-1.83A.44.44 0 0013.8 3h-3.6a.44.44 0 00-.44.38L9.5 5.21a1.08 1.08 0 01-.58.79 5.3 5.3 0 00-.57.33 1 1 0 01-1 .11l-1.69-.69a.44.44 0 00-.55.19l-1.8 3.12a.42.42 0 00.11.57l1.48 1.16a1 1 0 01.39.83v.76a1 1 0 01-.39.83l-1.48 1.16a.43.43 0 00-.11.57l1.8 3.12a.45.45 0 00.55.2l1.72-.7a1.05 1.05 0 011 .12c.181.116.368.223.56.32.314.152.534.446.59.79l.26 1.83a.44.44 0 00.44.38h3.6a.44.44 0 00.44-.38l.27-1.83a1.05 1.05 0 01.58-.79c.192-.1.38-.21.56-.33a1 1 0 011-.11l1.73.7a.44.44 0 00.55-.2l1.8-3.12a.46.46 0 00-.11-.57l-1.48-1.16a1 1 0 01-.46-.83zm-6.09 2.71a3.15 3.15 0 11-1.237-6.177 3.15 3.15 0 011.237 6.177z"
              fill="#DCDEE3"
              fillRule="nonzero"
            />
            <circle fill="#70727D" fillRule="nonzero" cx={12} cy={12} r={2} />
          </g>
        </svg >
      );
    case "store-performance":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z" />
            <path
              d="M22 8.99a.455.455 0 00-.065-.24L18.96 3.517a.493.493 0 00-.425-.25H5.46a.485.485 0 00-.425.25L2.066 8.75A.496.496 0 002 8.99c0 1.173.707 2.178 1.716 2.624v8.627c0 .27.221.49.49.49H19.79c.27 0 .49-.22.49-.49v-8.566c0-.02 0-.037-.004-.053A2.877 2.877 0 0022 8.99z"
              fill="#DCDEE3"
              fillRule="nonzero"
            />
            <path
              d="M17.383 8.187c.509 0 .922.412.922.922v3.986a.85.85 0 01-1.7 0l-.001-1.808-3.418 3.759a1.21 1.21 0 01-1.607.164l-.102-.083a1.21 1.21 0 01-.15-.164l-1.05-1.386-3.314 2.926a.85.85 0 11-1.126-1.274l3.71-3.275c.034-.03.034-.03.07-.057a1.21 1.21 0 011.695.233l1.013 1.336 3.254-3.58h-2.165a.85.85 0 01-.844-.743l-.006-.106c0-.47.38-.85.85-.85z"
              fill="#70727D"
              fillRule="nonzero"
            />
          </g>
        </svg >
      );

    /* Old */
    case "dekorasi":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <rect
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              x={8.01}
              y={12}
              width={16.07}
              height={20}
              rx={4}
            />
            <path
              d="M8.34 27.88l3.8-3.81a.74.74 0 011 0L17 27.88"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M15.33 26.24l3.1-3.1a.74.74 0 011 0l4.26 4.27M8.34 28h15.38"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <circle
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              cx={18.5}
              cy={17.3}
              r={1.87}
            />
            <path
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              d="M14.73 8h2.62"
            />
          </g>
        </svg >
      );
    case "elektronik":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <rect
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              x={8}
              y={17.9}
              width={20}
              height={14.1}
              rx={4}
            />
            <path
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              d="M8 28h20M13.68 12l3.96 5.62M22.32 12l-3.96 5.62"
            />
          </g>
        </svg >
      );
    case "f&b":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <path
              d="M11.14 20.13h13.72A3.14 3.14 0 0128 23.27v1.25A7.48 7.48 0 0120.52 32h-5A7.48 7.48 0 018 24.52v-1.25a3.14 3.14 0 013.14-3.14zM22.51 20.13l3.28-4.54M12.33 12a1.73 1.73 0 00.11 2.19 1.92 1.92 0 01-.11 2.73M17.37 12a1.73 1.73 0 00.11 2.19 1.92 1.92 0 01-.11 2.73"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
          </g>
        </svg >
      );
    case "fashion-muslim":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <path
              d="M12.62 18l1.13 2.22A10.57 10.57 0 0023.19 26h.34A4.47 4.47 0 0128 30.49h0a1.77 1.77 0 01-1.49 1.75l-.94.14c-5.022.8-10.138.8-15.16 0l-.92-.14A1.77 1.77 0 018 30.49h0a4.46 4.46 0 011.57-3.4A7.24 7.24 0 0012 20.92h0V14a6 6 0 016-6h0a6 6 0 016 6v6.12A11.36 11.36 0 0026.33 27h0"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M12.62 13l2.93-.61a12.2 12.2 0 014.89 0l3.21.64M24 14.23l-.85 4A5.27 5.27 0 0118 22.42h0a5.27 5.27 0 01-5.15-4.17l-.85-4"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
          </g>
        </svg >
      );
    case "fashion-pria":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <rect
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              x={8}
              y={12}
              width={24}
              height={20}
              rx={3.35}
            />
            <path
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              d="M20 15.98v6.69M28 23.58h-3.71M28 13.05V14a.84.84 0 01-.22.56l-3.13 3.32a.69.69 0 01-.82.14L20 16l7.06-3.53a.65.65 0 01.94.58zM12 13.05V14a.84.84 0 00.22.56l3.13 3.32a.69.69 0 00.82.14L20 16l-7.06-3.53a.65.65 0 00-.94.58z"
            />
          </g>
        </svg >
      );
    case "fashion-wanita":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <path
              d="M13.16 11.35h.45a4.19 4.19 0 012.1.57h0a.69.69 0 00.73 0h0a4.16 4.16 0 012.1-.57H19a2 2 0 012 2.38l-.37 1.91a4.62 4.62 0 01-4.55 3.72h0a4.62 4.62 0 01-4.55-3.72l-.37-1.91a2 2 0 012-2.38zM13.64 8v3.35M18.51 8v3.35"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M8 30.88L9.06 25a6.75 6.75 0 016.56-5.66h.91A6.75 6.75 0 0123.09 25l1.06 5.86M13.38 30.88a3.71 3.71 0 01-5.38 0M13.38 30.88a3.72 3.72 0 005.39 0M18.77 30.88a3.71 3.71 0 005.38 0"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
          </g>
        </svg >
      );
    case "furniture":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <rect
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              x={8.01}
              y={16.42}
              width={23.99}
              height={11.58}
              rx={4}
            />
            <path
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              d="M11.07 31.89L12.93 28M28.98 31.88L27.12 28M12 22.21h16M16.45 13.25h7.12"
            />
          </g>
        </svg >
      );
    case "gadget":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <circle fill={active ? '#E65015' : '#434755'} fillRule="nonzero" cx={15.5} cy={12} r={1.17} />
            <rect
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              x={8}
              y={8}
              width={15}
              height={24}
              rx={4}
            />
            <path
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              d="M13.75 28h3.5"
            />
          </g>
        </svg >
      );
    case "hiburan":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <path
              d="M21.79 31.68l-.93-.37a6.19 6.19 0 00-2.25-.42h-1.22a6.19 6.19 0 00-2.25.42l-.93.37A4.55 4.55 0 018 27.45v-2.72a4.65 4.65 0 014.65-4.65h10.7A4.65 4.65 0 0128 24.73v2.72a4.55 4.55 0 01-6.21 4.23zM12.74 24.19v3.44M14.46 25.91h-3.44"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <circle
              fill={active ? '#E65015' : '#434755'}
              fillRule="nonzero"
              cx={22.82}
              cy={23.81}
              r={1.06}
            />
            <circle
              fill={active ? '#E65015' : '#434755'}
              fillRule="nonzero"
              cx={22.82}
              cy={28.01}
              r={1.06}
            />
            <circle
              fill={active ? '#E65015' : '#434755'}
              fillRule="nonzero"
              cx={24.92}
              cy={25.91}
              r={1.06}
            />
            <circle
              fill={active ? '#E65015' : '#434755'}
              fillRule="nonzero"
              cx={20.72}
              cy={25.91}
              r={1.06}
            />
            <path
              d="M18 20.08s-2.58-3.46-.33-6 2.71-3.66 2.42-6"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
          </g>
        </svg >
      );
    case "hobi-olahraga":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <circle
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              cx={16.21}
              cy={16.21}
              r={8.21}
            />
            <path
              d="M10.56 10.4a8.21 8.21 0 010 11.63M21.87 22a8.21 8.21 0 010-11.63M24.01 24.43l6.82 7.02M19.34 27.04l4.76 4.9M26.65 19.57L32 25.09"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
          </g>
        </svg >
      );
    case "kamera":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <path
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              d="M12 14.67h4.51"
            />
            <rect
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              x={7.95}
              y={17.96}
              width={20.01}
              height={14.11}
              rx={4}
            />
            <circle
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              cx={19.99}
              cy={25.02}
              r={3.68}
            />
          </g>
        </svg >
      );
    case "kosmetik":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <path
              d="M19.58 24.87a8.69 8.69 0 113.91-13.56M14.39 28.69h4.51M16.67 25.37l-.03 3.32"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <rect
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              x={22.01}
              y={20.71}
              width={6.65}
              height={11.29}
              rx={2.18}
            />
            <path
              d="M24.76 18.32h1.15a1.5 1.5 0 011.5 1.5v.9h-4.15v-.89a1.5 1.5 0 011.5-1.51h0z"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M26.11 12.78l-1.25.47a1.3 1.3 0 00-.86 1.21v3.86h2.59v-5.17a.39.39 0 00-.48-.37z"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
          </g>
        </svg >
      );
    case "mokado":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <path
              d="M20.84 14.93c-.36 1.95-3.89 5.44-4.46 5.44-.57 0-4-3.49-4.47-5.44-.47-1.95.84-3.28 2.51-2.83a6.1 6.1 0 011.51 1c.252.2.608.2.86 0a6.17 6.17 0 011.53-1c1.92-.5 2.88.9 2.52 2.83z"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M23.2 15.49l1.21-.32a4 4 0 014.9 2.83l1.44 5.36a4 4 0 01-2.83 4.9l-13.44 3.6A4 4 0 019.58 29l-1.44-5.32a4 4 0 012.86-4.9M9.58 29.04l21.17-5.69M22 20.61l4.52-1.22"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
          </g>
        </svg >
      );
    case "otomotif":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <path
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              d="M28 32H12M16 28H8"
            />
            <circle
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              cx={24}
              cy={20}
              r={8}
            />
            <circle
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              cx={24}
              cy={20}
              r={2.37}
            />
            <path
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
              d="M26.15 12.29l-1.51 5.42M23.36 22.29l-1.51 5.42M31.71 22.15l-5.42-1.51M21.71 19.36l-5.42-1.51"
            />
          </g>
        </svg >
      );
    case "perlengkapan-bayi":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <path
              d="M12 19.85h16v1.79A6.37 6.37 0 0121.63 28h-6.4A3.23 3.23 0 0112 24.77v-4.92zM20.15 12h3.14A4.71 4.71 0 0128 16.71v3.14h-7.85V12z"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              d="M8 16.09h2.62A1.37 1.37 0 0112 17.46V20"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <circle fill={active ? '#E65015' : '#434755'} fillRule="nonzero" cx={16.53} cy={32} r={1.43} />
            <circle fill={active ? '#E65015' : '#434755'} fillRule="nonzero" cx={22.04} cy={32} r={1.43} />
          </g>
        </svg >
      );
    case "tiket":
      return (
        <svg width={size} height={size} viewBox="0 0 40 40" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h40v40H0z" />
            <circle fill="#FED156" fillRule="nonzero" cx={22} cy={18} r={10} />
            <path
              d="M9.89 20.38A2.66 2.66 0 008 23.65v.07A1.86 1.86 0 009.4 25a1.92 1.92 0 01.88 3.2 1.89 1.89 0 00-.52 1.8v.08a2.67 2.67 0 003.27 1.86l14.74-4.05a2.65 2.65 0 001.86-3.26v-.08a1.84 1.84 0 00-1.35-1.26 1.93 1.93 0 01-.88-3.21 1.83 1.83 0 00.52-1.78v-.07a2.66 2.66 0 00-3.27-1.86L9.89 20.38z"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <circle fill={active ? '#E65015' : '#434755'} fillRule="nonzero" cx={22.08} cy={19.84} r={1} />
            <circle fill={active ? '#E65015' : '#434755'} fillRule="nonzero" cx={22.95} cy={23} r={1} />
            <circle fill={active ? '#E65015' : '#434755'} fillRule="nonzero" cx={23.81} cy={26.16} r={1} />
            <path
              d="M10.4 17.18a2.28 2.28 0 01-.87-3.09v-.06a1.58 1.58 0 011.47-.76 1.64 1.64 0 001.38-2.48 1.58 1.58 0 01-.06-1.57v-.06a2.28 2.28 0 013.09-.87l9.27 5.2"
              stroke={active ? '#E65015' : '#434755'}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <circle fill={active ? '#E65015' : '#434755'} fillRule="nonzero" cx={16.78} cy={11.71} r={1} />
            <circle fill={active ? '#E65015' : '#434755'} fillRule="nonzero" cx={15.41} cy={14.15} r={1} />
            <circle fill={active ? '#E65015' : '#434755'} fillRule="nonzero" cx={14.05} cy={16.59} r={1} />
          </g>
        </svg >
      );
    default:
      return false;
  }
}

const MulticolorIcons = props => {
  const { name, size, active } = props;
  return (
    <>
      {getPath(size, name, active)}
    </>
  );
}

export default MulticolorIcons;