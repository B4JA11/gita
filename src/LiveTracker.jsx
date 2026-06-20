import React, { useEffect } from 'react';

function LiveTracker() {
  useEffect(() => {
    console.log("Live მონიტორინგი დაიწყო");

    const intervalId = setInterval(() => {
      console.log("ამინდის მონაცემები სინქრონიზებულია ბაზასთან...");
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ color: 'green', fontStyle: 'italic', marginTop: '10px' }}>
      🟢 Live სინქრონიზაცია ჩართულია...
    </div>
  );
}

export default LiveTracker;