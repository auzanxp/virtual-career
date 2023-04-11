import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export const GlobalContex = createContext();
export const GlobalProvider = (props) => {

    const navigate = useNavigate();
    const { Id } = useParams();
    const [user, setUser] = useState(null);
    const [dataJob, setDataJob] = useState(null);
    const [dataJobDetail, setDataJobDetail] = useState(null);
    const [search, setSearch] = useState('');
    const [fetchStatus, setFetchStatus] = useState(true);
    const [msg, setMsg] = useState('');
    const [currentId, setCurrentId] = useState(-1);
    const [openModal, setOpenModal] = useState(false);
    const [showPassword, SetShowPassword] = useState(false)
    const [input, setInput] = useState({
        current_password: '',
        new_password: '',
        new_confirm_password: '',
        title: '',
        job_description: '',
        job_qualification: '',
        job_type: '',
        job_tenure: '',
        job_status: '',
        company_name: '',
        company_image_url: '',
        company_city: '',
        salary_min: '',
        salary_max: '',
        email: '',
        password: '',
        name: '',
        image_url: ''
    })

    const handleInput = (e) => {
        let { value, name, type } = e.target

        if (type === "radio") {
            setInput({ ...input, [name]: parseInt(value) });
        } else {
            setInput({ ...input, [name]: value });
        }
    }

    const handleShowPassword = () => SetShowPassword(!showPassword)

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        const { name, image_url, email, password } = input
        axios.post('https://dev-example.sanbercloud.com/api/register ', {
            name,
            image_url,
            email,
            password
        })
            .then(() => {
                navigate('/login')
            })
            .catch((err) => {
                console.log(err)
            })
        setInput({
            name: '',
            image_url: '',
            email: '',
            password: ''
        })
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        const { email, password } = input
        axios.post('https://dev-example.sanbercloud.com/api/login', {
            email, password
        })
            .then((res) => {
                const { token, user } = res.data
                Cookies.set('token', token, { expires: 5 })
                Cookies.set('user', JSON.stringify(user), { expires: 5 })
                toast.success('Successfully!')
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err)
                toast.error('Oops! Something went wrong')
            })
    }

    const handleLogout = () => {
        Cookies.remove('token')
        Cookies.remove('user')
        navigate('/login')
    }

    const getDataJob = () => {
        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            .then((res) => {
                // const response = res.data.data
                setDataJob([...res.data.data])
                setFetchStatus(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getDataJobDetail = () => {
        if (Id !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`)
                .then((res) => {
                    setDataJob(res.data)
                    setFetchStatus(true)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setDataJob(null)
        const getSearch = async () => {
            const { data } = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            const response = data.data
            const searchData = response.filter((ress) => {
                return Object.values(ress).join(' ').toLowerCase().includes(search.toLowerCase())
            })

            setDataJob([...searchData])
        }
        getSearch()
        setSearch('')
    }

    const handleFilterData = (e) => {
        e.preventDefault()
        setDataJob(null)
        const getFilterData = async () => {
            const { data } = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
            const response = data.data
            const filterData = response.filter((res) => {
                return res.company_name === input.company_name || res.company_city === input.company_city || res.job_tenure === input.job_tenure
            })
            setDataJob([...filterData])
        }
        getFilterData()
        setInput({
            company_name: '',
            company_city: '',
            job_tenure: ''
        })

    }

    const handleDescString = (str, maxLength) => {
        if (str === undefined) {
            return " "
        } else {
            return str.slice(0, maxLength) + "..."
        }
    }

    const formatRupiah = (angka, prefix) => {
        var number_string = angka.replace(/[^,\d]/g, '').toString(),
            split = number_string.split(','),
            sisa = split[0].length % 3,
            rupiah = split[0].substr(0, sisa),
            ribuan = split[0].substr(sisa).match(/\d{3}/gi);
        if (ribuan) {
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }
        rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix === undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
    }

    const handleChangePassword = (e) => {
        e.preventDefault();
        const {
            current_password,
            new_password,
            new_confirm_password } = input
        axios.post('https://dev-example.sanbercloud.com/api/change-password', {
            current_password,
            new_password,
            new_confirm_password
        }, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
            .then((res) => {
                if (res.data) {
                    const succesMsg = res.data
                    setMsg(succesMsg)
                }
            })
            .catch((err) => {
                if (err.response) {
                    setMsg(null)
                }
            })

        setMsg('')
        setInput({
            current_password: '',
            new_password: '',
            new_confirm_password: ''
        })
    }

    const handleSubmitData = (e) => {
        e.preventDefault()
        const {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max
        } = input

        if (currentId === -1) {
            axios.post('https://dev-example.sanbercloud.com/api/job-vacancy', {
                title,
                job_description,
                job_qualification,
                job_type,
                job_tenure,
                job_status,
                company_name,
                company_image_url,
                company_city,
                salary_min,
                salary_max
            }, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
                .then(() => {
                    setFetchStatus(true)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`, {
                title,
                job_description,
                job_qualification,
                job_type,
                job_tenure,
                job_status,
                company_name,
                company_image_url,
                company_city,
                salary_min,
                salary_max
            }, { headers: { "Authorization": "Bearer " + Cookies.get('token') } })
                .then(() => {
                    setFetchStatus(true)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        setCurrentId(-1)
        setInput({
            title: '',
            job_description: '',
            job_qualification: '',
            job_type: '',
            job_tenure: '',
            job_status: '',
            company_name: '',
            company_image_url: '',
            company_city: '',
            salary_min: '',
            salary_max: '',
        })
    }

    const handleDelete = (e) => {
        let ID_JOB = parseInt(e.target.value)
        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${ID_JOB}`,
            {
                headers: { "Authorization": "Bearer " + Cookies.get('token') }
            })
            .then(() => {
                setFetchStatus(false)
                setOpenModal(false);
            })
    }

    const handleEditData = (e) => {
        let ID_JOB = parseInt(e.target.value)
        setCurrentId(ID_JOB)
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${ID_JOB}`)
            .then((res) => {
                const data = res.data
                setInput({
                    title: data.title,
                    job_description: data.job_description,
                    job_qualification: data.job_qualification,
                    job_type: data.job_type,
                    job_tenure: data.job_tenure,
                    job_status: data.job_status,
                    company_name: data.company_name,
                    company_image_url: data.company_image_url,
                    company_city: data.company_city,
                    salary_min: data.salary_min,
                    salary_max: data.salary_max
                })
            })
        navigate(`/dashboard/list-data/edit/${ID_JOB}`)
    }

    const datas = {
        Id,
        navigate,
        user,
        setUser,
        input,
        setInput,
        dataJob,
        setDataJob,
        dataJobDetail,
        setDataJobDetail,
        search,
        setSearch,
        fetchStatus,
        setFetchStatus,
        msg,
        setMsg,
        currentId,
        setCurrentId,
        openModal,
        setOpenModal,
        showPassword,
        SetShowPassword
    }

    const method = {
        getDataJobDetail,
        handleLogout,
        handleInput,
        handleChangePassword,
        handleSubmitData,
        getDataJob,
        handleDescString,
        formatRupiah,
        handleSubmitLogin,
        handleSubmitRegister,
        handleSearch,
        handleFilterData,
        handleDelete,
        handleEditData,
        handleShowPassword
    }
    return (
        <GlobalContex.Provider value={{ datas, method }}>
            {props.children}
        </GlobalContex.Provider>
    )
}