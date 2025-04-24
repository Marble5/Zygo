import React from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Avatar } from '@mui/material';

export default function Gamification() {
  const rankings = [
    { position: 1, name: "John Walker", level: 3, change: 3 },
    { position: 2, name: "Daniella Kobli", level: 4, change: 3 },
    { position: 3, name: "Moiz Khalil", level: 1, change: 3 },
    { position: 4, name: "Christian Pedersen", level: 1, change: 3 },
    { position: 5, name: "Victor Lund", level: 1, change: 3 },
    { position: 6, name: "Fatima Li", level: 2, change: 3 },
    { position: 7, name: "Zaid Sheikh", level: 3, change: 3 },
  ];
  return (
    <div className="width"  style={{ width: "1000px", marginLeft:"-200px", marginTop:"100px"}} >
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Podium Top 3 */}
      <div className="bg-indigo-600 px-8 py-12">
        <div className="max-w-4xl mx-auto flex items-end justify-around">
          {/* Second Place */}
          <div className="flex flex-col items-center">
            <Avatar className="w-20 h-20 border-2 border-white bg-gray-300" style={{width:'100px',height:'100px'}}></Avatar>
            <div className="mt-3 text-white font-medium">Daniella Kobli</div>
            <div className="text-indigo-200 text-sm">Level 4</div>
            <div className="mt-3 h-32 w-20 bg-indigo-500 rounded-t-lg flex items-end justify-center text-white text-xl font-bold" style={{ height: '130px', width: '180px', marginBottom: '-40px', marginTop:'40px',  backgroundImage: 'linear-gradient(to top, #4845e1 0%, transparent 100%)', }}>
              <div
              className="mt-3 rounded-t-lg flex items-center justify-center text-white font-extrabold "
              style={{
                height: '130px',
                width: '180px',
                marginBottom: '0px',
                marginTop: '30px',
                fontSize: '3rem', 
              }}
            >
              2
              </div>
            </div>
          </div>
          {/* First Place */}
          <div className="flex flex-col items-center">
            <Avatar className="w-20 h-20 border-2 border-white bg-gray-300" style={{width:'100px',height:'100px'}}></Avatar>
            <div className="mt-3 text-white font-medium">John Walker</div>
            <div className="text-indigo-200 text-sm">Level 3</div>
            <div className="mt-3 h-40 w-24 bg-indigo-500 rounded-t-lg flex items-end justify-center text-white text-2xl font-bold" style={{ height: '180px', width: '180px', marginBottom: '-40px', marginTop:'40px', backgroundImage: 'linear-gradient(to top, #4845e1 0%, transparent 100%)',}}>
            <div
              className="mt-3 rounded-t-lg flex items-center justify-center text-white font-extrabold"
              style={{
                height: '130px',
                width: '180px',
                marginBottom: '40px',
                marginTop: '30px',
                fontSize: '3rem', 
              }}
            >
              1
              </div>
            </div>
          </div>
          {/* Third Place */}
          <div className="flex flex-col items-center">
            <Avatar className="w-16 h-16 border-2 border-white bg-gray-300" style={{width:'100px',height:'100px'}}></Avatar>
            <div className="mt-3 text-white font-medium">Moiz Khalil</div>
            <div className="text-indigo-200 text-sm">Level 1</div>
            <div className="mt-3 h-32 w-20 bg-indigo-500 rounded-t-lg flex items-end justify-center text-white text-xl font-bold" style={{ height: '110px', width: '180px', marginBottom: '-40px', marginTop:'40px', backgroundImage: 'linear-gradient(to top, #4845e1 0%, transparent 100%)', }}>
            <div
              className="mt-3 rounded-t-lg flex items-center justify-center text-white font-extrabold"
              style={{
                height: '130px',
                width: '180px',
                marginBottom: '-10px',
                marginTop: '30px',
                fontSize: '3rem', 
              }}
            >
              3
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ranking List */}
      <div className="bg-white flex-grow mt-6 pb-6">
        <div className="max-w p-4 bg-white rounded-lg shadow-md overflow-y-auto max-h" >
          {rankings.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b last:border-none hover:bg-gray-50 transition"
            >
              <div className="flex items-center">
                <div className="text-gray-500 font-semibold w-8">{user.position}</div>
                <Avatar className="w-10 h-10 bg-gray-300 text-gray-600">
                  {user.name.charAt(0)}
                </Avatar>
                <div className="ml-4">
                  <div className="text-gray-900 font-medium">{user.name}</div>
                  <div className="text-gray-500 text-sm">Level {user.level}</div>
                </div>
              </div>
              <div className="flex items-center text-green-500 font-semibold">
                <ArrowUpwardIcon fontSize="small" className="text-green-500" />
                <span>{user.change}</span>
                <span className="ml-1 text-gray-400 text-sm">From Last Month</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
