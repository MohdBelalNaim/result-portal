import React from 'react';

const StudentResultPage =() =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6">
                    <div className='text-center py-3'>End semester 2021-22 (ODD)</div>
                    <table class="table text-center table-striped">
                        <thead className='bg-dark text-light'>
                          <tr>
                            <th scope="col">Subject</th>
                            <th scope="col">Internal marks</th>
                            <th scope="col">External marks</th>
                            <th scope="col">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Hindi</td>
                            <td>10/15</td>
                            <td>9/10</td>
                            <td>19/25</td>
                          </tr>
                          <tr>
                            <td>Hindi</td>
                            <td>10/15</td>
                            <td>9/10</td>
                            <td>19/25</td>
                          </tr>
                          <tr>
                            <td>Hindi</td>
                            <td>10/15</td>
                            <td>9/10</td>
                            <td>19/25</td>
                          </tr>
                          <tr>
                            <td>Hindi</td>
                            <td>10/15</td>
                            <td>9/10</td>
                            <td>19/25</td>
                          </tr>
                          <tr>
                            <td>Hindi</td>
                            <td>10/15</td>
                            <td>9/10</td>
                            <td>19/25</td>
                          </tr>
                          <tr>
                            <td>Hindi</td>
                            <td>10/15</td>
                            <td>9/10</td>
                            <td>19/25</td>
                          </tr>
                          <tr>
                            <td>Hindi</td>
                            <td>10/15</td>
                            <td>9/10</td>
                            <td>19/25</td>
                          </tr>
                          <tr>
                            <td>Hindi</td>
                            <td>10/15</td>
                            <td>9/10</td>
                            <td>19/25</td>
                          </tr>
                        </tbody>
                    </table>
                    <div className="py-2">Grand total: 131/200</div>
                    <div className="py-2">Semeser percentage: 83.7%</div>
                </div>
                <div className="col-lg-3">&nbsp;</div>
            </div>
        </div>
    )
}

export default StudentResultPage