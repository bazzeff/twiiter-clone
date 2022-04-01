import { useFaker } from 'react-fakers'

const data = []
const count = 200

let range = n => Array.from(Array(n).keys())

for(i in range(count)){
    data.push({
        id: useFaker.random.uuid(),
        user: {
            name: useFaker.name.firstName()
        },
        subject: useFaker.lorem.words(5)
    })
}

export default data