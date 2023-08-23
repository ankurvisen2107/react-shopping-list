import React, {ChangeEventHandler, FC} from 'react';
import {FaBars, FaCheck, FaRegBell} from "react-icons/fa";
import IconPanel from "../Generic/IconPanel";
import {FaRegShareFromSquare} from "react-icons/fa6";

interface Props {
    query: string,
    onChange: ChangeEventHandler
}

const SearchBar: FC<Props> = ({query, onChange}) =>
    (
        <div className='item-row top-padding center-align'>
            <div className='item-column' style={{flexGrow: 1}}>
                <IconPanel
                    icon={<FaBars size={'1.5em'}/>}
                />
            </div>
            <div className='flex-half item-column' style={{flexGrow: 6}}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={onChange}
                />
            </div>
            <div className='item-column margin-left' style={{flexGrow: 1}}>
                <IconPanel
                    icon={<FaRegBell size={'1.5em'}/>}
                />
            </div>
            <div className='item-column' style={{flexGrow: 1}}>
                <IconPanel
                    icon={<FaCheck size={'1.5em'}/>}
                />
            </div>
            <div className='item-column' style={{flexGrow: 1}}>
                <IconPanel
                    icon={<FaRegShareFromSquare size={'1.5em'}/>}
                />
            </div>
        </div>
    );

export default React.memo(SearchBar);
