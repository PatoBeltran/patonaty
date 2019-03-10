import * as React from "react";


export const Dropdown = ({options, selected, select}: any) => {
    let [showOptions, setShowOptions] = React.useState<boolean>(false)

    React.useEffect(() => {
        setShowOptions(false)
     }, [selected])

    return (
    <div className="dropdown" onClick={() => setShowOptions(true)}>
        <div className="placeholder" hidden={showOptions}>{selected.value}</div>
        <Options
        handleClickOption={ (option: any) => select(option) }
        options={options}
        selected={selected}
        showOptions={showOptions}/>
    </div>);
}

const Options = ({handleClickOption, options, selected, showOptions}: any) => (
    <div className="options">
    { options.map((option: any) => (
        <Option
        key={option.key}
        selected={selected.key==option.key}
        handleClick={() => handleClickOption(option)}
        hidden={!showOptions}>
        {option.value}
        </Option>
    ))}
    </div>
)

const Option = ({children, selected, hidden, handleClick}: any) => {
    return (<div
        className={selected ? "selected option":"option"}
        onClick={() => handleClick()}
        hidden={hidden}>
        {...children}
    </div>);
}