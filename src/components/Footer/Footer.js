import React, { useEffect } from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © Created by:
        <a className="text-white" href="/">
          rahulparakkal98@gmail.com
        </a>
      </div>
    </MDBFooter>
  );
}
