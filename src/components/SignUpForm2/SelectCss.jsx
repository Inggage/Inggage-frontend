const SelectCss =
{
    control: (provided, state) => ({
      ...provided,
      width:'100%',
      borderRadius: '50px',
      backgroundColor: 'white',
      outline: state.isFocused ? 'none' : '',
    }),

    menu: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      color: 'black',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'lightgray' : 'white',
      color: 'black',
      '&:active': {
        backgroundColor: 'green',
        color: 'white',
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#73737304',
      color: 'white',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'rgb(6, 6, 6)',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'rgb(6, 6, 6)',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#000000',
        color: 'white',
      },
    }),
  };


  export default SelectCss