import React, { useState } from 'react';

export default function Search() {
    const [state, setState] = useState("");
    const [list, setList] = useState([]);
    const [index, setIndex] = useState(-1);
    const [isListVisible, setIsListVisible] = useState(false);
    const obj = [
        { id: 1, name: "kunal" }, { id: 2, name: "ammol" }, { id: 3, name: "gaurav" },
        { id: 4, name: "nikhil" }, { id: 5, name: "kunal" }, { id: 6, name: "ammol" },
        { id: 7, name: "gaurav" }, { id: 8, name: "nikhil" }
    ];

    function searched(e) {
        const value = e.target.value;
        setState(value);
        setIsListVisible(true);

        if (value.length > 0) {
            let filtered = obj.filter(k => k.name.toLowerCase().includes(value.toLowerCase()));
            setList(filtered);
        } else {
            setList([]);
        }
    }

    function keytouch(e) {
        if (e.key === 'ArrowDown') {
            setIndex(prev => (prev < list.length - 1 ? prev + 1 : prev));
        } else if (e.key === 'ArrowUp') {
            setIndex(prev => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === 'Enter' && index >= 0) {
            setState(list[index].name);
            setList([]);
            setIndex(-1);
            setIsListVisible(false);
        }
    }

    return (
        <div>
            <input value={state} onChange={searched} onKeyDown={keytouch} type='text' onFocus={() => setIsListVisible(true)} />
            <button>SEARCH</button>
            {isListVisible && (
                <div>
                    {list.length > 0 ? (
                        list.map((vr, i) => (
                            <ul key={vr.id}>
                                <li style={{ background: index === i ? 'pink' : 'white' }}
                                    onMouseEnter={() => setIndex(i)}
                                    onClick={() => {
                                        setState(vr.name);
                                        setList([]);
                                        setIndex(-1);
                                        setIsListVisible(false);
                                    }}>
                                    {vr.name}
                                </li>
                            </ul>
                        ))
                    ) : (
                        obj.slice(0, 5).map(v => (
                            <li key={v.id}>{v.name}</li>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
