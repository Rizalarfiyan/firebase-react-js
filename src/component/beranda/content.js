import React, { Component, useState, useEffect } from 'react'
import firebase from '../../auth/firebase' 

class Postingan extends Component {
    render() {
        const data = this.props
        const reserve = data.reserve === true ? 'reserve' : '';
        return (
            <div className={`aboutarfiyan ${reserve}`}>
                <div className="image">
                    <img src={data.image} alt={data.judul} />
                </div>
                <div className="arfiyancontent">
                    <h2>{data.judul}</h2>
                    <span className="desc">{data.content}</span>
                </div>
            </div>
        )
    }
}

class GetData extends Component {
    render() {
        let rows = []
        let halaman = this.props.halaman
        halaman.forEach((data, key) => {
            let ganjil = key % 2 === 0 ? false : true;
            rows.push(<Postingan key={key} judul={data.judul} image={data.image} content={data.content} reserve={ganjil} />)
        });
        return rows
    }
}

function GetPostingan() {

    const [content, setContent] = useState('')
    const [posisi, setPosisi] = useState('')

    useEffect(() => {
        let posisiAwal = 2
        async function firstLoad() {
            await firebase.getPostingan().limitToFirst(posisiAwal).on('value', function(snapshot) {
                let row = []
                snapshot.forEach(function(child){
                    row.push(child.val())
                })
                return setContent(<GetData halaman={row} />)
            })
            setPosisi(posisiAwal + 2)
        }
        firstLoad()
    }, [])
    
    return (
        <section className="arfiyandesign">
            <div className="wrapper">
                {content}
            </div>
            <div className="buttonGroup">
                <button className="btn btn-ln btn-anim" onClick={load_more}>Load More</button>
            </div>
        </section>
    )

    async function load_more() {
        await firebase.getPostingan().limitToFirst(posisi).on('value', function(snapshot) {
            let row = []
            snapshot.forEach(function(child){
                row.push(child.val())
            })
            return setContent(<GetData halaman={row} />)
        })
        setPosisi(posisi + 2)
    }

    // function added() {
    //     for (let nomor = 1; nomor < 5; nomor++) {
    //         let array = {
    //             judul: 'Postingan ' + nomor,
    //             image: 'https://source.unsplash.com/random/800x800/?nature,scenery',
    //             content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum commodi saepe et obcaecati modi tempore ea, expedita vitae doloremque, vel quae non at illo error ab omnis facere? Sequi, fugiat nulla temporibus laboriosam, vel ut sapiente labore eveniet a dolor nam velit quia amet natus?'
    //         }
    //         firebase.setPostingan(array)
    //     }
    // }
}

export default GetPostingan