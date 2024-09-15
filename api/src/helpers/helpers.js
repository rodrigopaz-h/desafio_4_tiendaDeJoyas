const handleGenerateHATEOAS = (data) => {
  return {

      count: data.rowCount,
      results: data.rows,
      pages: data.pages,
      next: `http://localhost:3000/${data.type}?limit=${data.limit}&offset=${data.offset}`

  }

}

module.exports = {
  handleGenerateHATEOAS
}