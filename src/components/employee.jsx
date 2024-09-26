export const Employee = ({fam, name, otch, mon}) => {
    return <>
        <br /> фамилия : <span>{fam}</span>
        <br /> имя : <span>{name}</span>
        <br /> отчество : <span>{otch}</span>
        <br /> зарплата : <span>{mon}</span>
    </>
}