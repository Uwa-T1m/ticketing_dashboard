const useCreateDate = () => {
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()

const newDate = `${day}/${month}/${year}`

return newDate;
}

export default useCreateDate