const Form = () => {
  <div className="form-container">
    <h2>Add New Book</h2>
    <form>
      <input type="text" name="title" placeholder="Book Title"/>
      <input type="text" name="author" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
}

export default Form;