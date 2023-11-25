import react from 'react';
import { useState } from 'react';

const insuranceItems = [
    { id: 0, title: 'Kasko Sigortası'},
    { id: 1, title: 'Zorunlu Trafik Sigortası'},
    { id: 2, title: 'İMM'},
];

export default function SelectInsurance() {
    const [items, setItems] = useState(insuranceItems);
    const [selectedId, setSelectedId] = useState(0);
    const selectedItem = items.find( item => item.id === selectedId);

    function handleItemChange(id, e) {
        setItems(items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    title: e.target.value,
                };
            } else {
                return item;
            }
        }));
    }

    return (
        <>
            <h2>Araç</h2>
            <h1>İhtiyacınız olan ürünü seçin.</h1>
            <span className='description'>Aşağıdaki sigorta türlerinden birini seçerek devam edebilirsiniz.</span>
            <ul style={{}}>
                {items.map((item, index) => (
                    <button className={selectedId === item.id ? 'selected' : ''} onClick={() => { setSelectedId(item.id); }}>
                        <li key={item.id}>
                            <span>{item.title}</span>   
                        </li>
                    </button>
                ))}
            </ul>
            <button className='next-button'>İleri</button>
            <p>Seçilen ürün: {selectedItem.title}.</p>
        </>
    );
}