import image from '../../assets/Aditya.png'

const Card = () => {
    const cardData = [
        {
            "name": "Aditya",
            "age": 20,
            "adm No:": "2024BTCS157",
            "img": image
        }

    ]
  return (
    <div>
        {cardData.map((data, index) => {
            return (
                <div key={index} className='card'>
                    <img src={data.img} alt="Aditya" />
                    <h2>{data.name}</h2>
                    <p>Age: {data.age}</p>
                    <p>Adm No: {data["adm No:"]}</p>
                </div>
            )
        })
        }
    </div>
  )
}

export default Card

