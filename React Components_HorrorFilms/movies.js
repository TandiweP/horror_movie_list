function Movie({data}){
    return (
        
        <div className="card">
            
            <h5 className="card-header">{data.title}</h5>
            
            <div className="card-body">
            

                <table className="table">
                  <tbody>
                    <tr>
                        <td className="text-success font-weight-bold">Title:</td>
                        <td>{data.title}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Tagline:</td>
                        <td>{data.tagline}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Director:</td>
                        <td>{data.director}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Released:</td>
                        <td>{data.released}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">My Rating:</td>
                        <td>{data.myRating}</td>
                    </tr>
                  </tbody>
                </table>

            </div>
        </div>

)}