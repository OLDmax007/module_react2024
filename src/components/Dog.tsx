import React, {FC} from 'react';
interface IProps {
    fname: string;
    lname: string;
    img: string;
    children?: React.ReactNode
}

const Dog:FC<IProps> = ({fname, lname, img, children}) => {
    // console.log(props)
    return (
        <div className="infoOfDog">
            <h2>{fname} {lname}</h2>
            <img src={img} alt=""/>
            <div>{children}</div>
        </div>
    );
};

export default Dog;