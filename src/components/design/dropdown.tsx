import * as React from "react";

interface IOption {
    key: string,
    value: string
}

export const Dropdown = ({options, selected, select}: any) => {
    let [showOptions, setShowOptions] = React.useState<boolean>(false)

    React.useEffect(() => {
        setShowOptions(false)
     }, [selected])

    return (
    <div className="dropdown" onClick={() => setShowOptions(!showOptions)}>
        <div className="placeholder">{selected.value}</div>
        <Options
        handleClickOption={ (option: any) => select(option) }
        options={options}
        selected={selected}
        disabled={!showOptions}/>
    </div>);
}

const Options = ({handleClickOption, options, selected, disabled}: any) => (
    <div className="options">
    { options.filter((option: IOption) => option.key != selected.key).map((option: IOption, index: number) => (
        <Option
        key={option.key}
        handleClick={() => handleClickOption(option)}
        disabled={disabled}
        index={index}>
        {option.value}
        </Option>
    ))}
    </div>
)

const Option = ({children, disabled, handleClick, index}: any) => {
    return (<div
        className={`option animated ${disabled? "" : "flipInX"} delay-${index}s`}
        onClick={() => handleClick()}
        style={{"opacity": disabled? 0 : 1}}
        >
        {...children}
    </div>);
}