import React from 'react';

const TableRoute = () => {
  const data = [
    {
      rank: 1,
      name: 'NIthinKonda',
      username: 'nithin_konda',
      hackerRank: 1500,
      leetCode: 1200,
      codeForces: 1800,
      codeChef: 1600,
    },
    {
        rank: 1,
        name: 'NIthinKonda',
        username: 'nithin_konda',
        hackerRank: 1500,
        leetCode: 1200,
        codeForces: 1800,
        codeChef: 1600,
      },
      {
        rank: 1,
        name: 'NIthinKonda',
        username: 'nithin_konda',
        hackerRank: 1500,
        leetCode: 1200,
        codeForces: 1800,
        codeChef: 1600,
      },
      {
        rank: 1,
        name: 'NIthinKonda',
        username: 'nithin_konda',
        hackerRank: 1500,
        leetCode: 1200,
        codeForces: 1800,
        codeChef: 1600,
      },
      {
        rank: 1,
        name: 'NIthinKonda',
        username: 'nithin_konda',
        hackerRank: 1500,
        leetCode: 1200,
        codeForces: 1800,
        codeChef: 1600,
      }
    // Add more data entries as needed
  ];
  const thStyle = {
    background: 'black',
    padding: '8px',
    color:'white',
    borderRight: '1px solid #ddd',
    borderBottom: '1px solid white',
  };

  const tableStyle = {
    position:'relative',
    top:'20px',
    border: '1px solid white',
    borderRadius: '5px',
    width: '100%',
    borderRight: '1px solid #ddd',
  };

  const tdStyle = {
    padding: '8px',
    borderRight: '1px solid #ddd',
    borderBottom:'1px solid white',
  };
  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{position:'relative', top:'20px'}}>Leaderboard</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Rank</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Username</th>
            <th style={thStyle}>HackerRank</th>
            <th style={thStyle}>LeetCode</th>
            <th style={thStyle}>CodeForces</th>
            <th style={thStyle}>CodeChef</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td style={tdStyle}>{entry.rank}</td>
              <td style={tdStyle}>{entry.name}</td>
              <td style={tdStyle}>{entry.username}</td>
              <td style={tdStyle}>{entry.hackerRank}</td>
              <td style={tdStyle}>{entry.leetCode}</td>
              <td style={tdStyle}>{entry.codeForces}</td>
              <td style={tdStyle}>{entry.codeChef}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRoute;