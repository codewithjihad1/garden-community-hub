import React, { useEffect, useState } from 'react'
import GardenerCard from '../components/GardenerCard';
import { api } from '../services/GetServices';
import Loading from '../components/Loading';
import useDocumentTitle from '../hooks/useDocumentTitle';



const ExploreGardeners = () => {
    const [gardenersData, setGardenersData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const res = await api.get("/gardeners")
            setGardenersData(res.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    // Document title
    useDocumentTitle("Explore Gardeners")

    // conditional rendering
    if (loading) return <Loading />

    return (
        <section>
            <div className='container mx-auto'>
                <h2 className="text-2xl font-bold mb-4 text-green-700">🌱 Explore Gardeners</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gardenersData.map(gardener => (
                        <GardenerCard key={gardener.id} gardener={gardener} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExploreGardeners
