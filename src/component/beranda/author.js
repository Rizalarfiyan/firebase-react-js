import React, { Component } from 'react'
import pembuat from '../../assets/img/rizal.png'

const users_list = [
    {
        nama: 'Muhamad Rizal Arfiyan',
        jabatan: 'UI-UX | Back End | Front End',
        deskripsi: 'Hidup itu seperti programming, jika ada kesalahan maka perbaikilah untuk menjadi yang lebih baik baik lagi! Coding its my live.',
        gambar: pembuat,
        quotes: 'TK Teratai, Cugugur Tengah (Cimahi) - SD Negeri Sosial 1, Cimahi - SMP Negeri 1 Kebumen - SMA Negeri 2 Kebumen',
        website: 'https://instagram.com/rizalarfiyan',
        sosmed: [{
            name: 'Github',
            link: 'https://github.com/rizalarfiyan',
            icon: 'fa-github',
        }, {
            name: 'Email',
            link: 'mailto:rizal.arfiyan23@gmail.com',
            icon: 'fa-envelope',
        }, {
            name: 'Instagram',
            link: 'https://instagram.com/rizalarfiyan',
            icon: 'fa-instagram'
        }]
    }
]

class Gambar extends Component {
    render() {
        const data = this.props
        return (
            <div className="image">
                <div className="svg">
                    <svg className="atas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.13 39.15">
                        <path d="M132.16,69.54S105.52,38.73,74.26,63A48,48,0,0,0,62.51,76.74c-11.78,20-26.63,8.37-17.35-10.2C55.38,46.1,106.16,37.54,132.16,69.54Z" transform="translate(-42.12 -48.2)" />
                    </svg>
                    <svg className="tigaatas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.25 28.61">
                        <path d="M161.16,81.54c9-3,15,10,16-1C177.16,71.54,164.16,77.54,161.16,81.54Z" transform="translate(-151.04 -56.56)" />
                        <path d="M159.16,77.54c6-6,19-6,19-11S166.16,56.54,159.16,77.54Z" transform="translate(-151.04 -56.56)" />
                        <path d="M156.16,75.54c-4-9,8-9,6-16-2-6-11-2-11,7,0,7,5,9,5,9" transform="translate(-151.04 -56.56)" />
                    </svg>
                    <svg className="lingkaran" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126 126">
                        <circle cx="63" cy="63" r="63" />
                    </svg>
                    <svg className="bawah" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158.35 74.58">
                        <path d="M32.16,150.54s-9,22,12,37c28,19,32-10,54-19,18-7,34,6,49,4,20,0,40-18,18-28s6-29,17-7-11,45-36,42-39.09-12-56,7c-16,18-35,19-50,8C16.23,177,32.16,150.54,32.16,150.54Z" transform="translate(-26.84 -127.23)" />
                    </svg>
                    <svg className="mask_lingkaran" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.25 93.25">
                        <path d="M173,128.07V218H47V125h.18A63,63,0,0,0,173,128.07Z" transform="translate(-46.88 -124.88)" />
                    </svg>
                </div>
                <img src={data.image} alt={data.name} />
            </div>
        )
    }
}

class Quotes extends Component {
    render() {
        const data = this.props
        return (
            <span>
                <span className="quotes">{data.quotes}</span>
                <a href={data.website} className="btn btn-anim" rel="noopener noreferrer">More <i className="fa fa-chevron-right reverse"></i></a>
            </span>
        )
    }
}

class Sosmed extends Component {
    render() {
        const data = this.props
        return(
            <li>
                <a className="btn-anim" href={data.link} rel="noopener noreferrer"><i className={`fa ${data.icon}`}></i></a>
            </li>
        )
    }
}

class AllSosmed extends Component {
    render() {
        const rows = []
        this.props.sosmed.forEach((data, key) => {
            rows.push(<Sosmed key={key} link={data.link} icon={data.icon} />)
        });
        return (
            <ul className="social-icons">{rows}</ul>
        )
    }
}

class Caption extends Component {
    render() {
        const data = this.props
        return (
            <div className="caption">
                <h2>{data.nama}</h2>
                <h4>{data.jabatan}</h4>
                <span className="quotes">{data.deskripsi}</span>
                <a href={data.website} className="btn btn-anim" rel="noopener noreferrer">More <i className="fa fa-chevron-right reverse"></i></a>
            </div>
        )
    }
}

class Author extends Component {
    render() {
        const gambar = []
        const quotes = []
        const sosmed = []
        const caption = []
        this.props.users.forEach((data, key) => {
            gambar.push(<Gambar key={key} name={data.name} image={data.gambar} />)
            quotes.push(<Quotes key={key} quotes={data.quotes} website={data.website} />)
            sosmed.push(<AllSosmed key={key} sosmed={data.sosmed} />)
            caption.push(<Caption key={key} nama={data.nama} jabatan={data.jabatan} deskripsi={data.deskripsi} website={data.website} />)
        });
        
        return (
            <div className="author btn-anim">
                <div className="sekolah">
                    {gambar}
                    <div className="datasekolah">{quotes}{sosmed}</div>
                </div>
                {caption}
            </div>
        )
    }
}

class AuthorWrap extends Component {
    render() {
        const author = []
        users_list.forEach((data, key) => {
            author.push(<Author key={key} users={[data]} />)
        });
        return (
            <section className="author_section" id="author">
                <div className="wrapper">
                    <h1>Tentang Pembuat</h1>
                    <div className="authorwrap">{author}</div>
                </div>
            </section>
        )
    }
}

export default AuthorWrap