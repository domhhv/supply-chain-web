// import {Card, CardBody} from '@heroui/card';
import { CircularProgress } from '@heroui/progress';
import React from 'react';
import { useParams } from 'react-router';

// import { getSupplyChainTrail } from '../services/api';

function ItemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [_events, _setEvents] = React.useState<[]>([]);
  const [loading, _setLoading] = React.useState(true);

  React.useEffect(() => {
    if (id) {
      // getSupplyChainTrail(id)
      //   .then((data) => {
      //     setEvents(data);
      //     setLoading(false);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //     setLoading(false);
      //   });
    }
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  // return (
  //   <div className="p-4">
  //     <h2 className="text-2xl font-bold mb-4">Supply Chain Trail for Item {id}</h2>
  //     {events.length === 0 ? (
  //       <p>No events found for this item.</p>
  //     ) : (
  //       events.map((event) => (
  //         <Card key={event.id} className="mb-2">
  //           <CardBody>
  //             <p>
  //               <strong>Location:</strong> {event.location}
  //             </p>
  //             <p>
  //               <strong>Custodian:</strong> {event.custodian}
  //             </p>
  //             <p>
  //               <strong>Time:</strong> {new Date(event.createdAt).toLocaleString()}
  //             </p>
  //           </CardBody>
  //         </Card>
  //       ))
  //     )}
  //   </div>
  // );
}

export default ItemDetailPage;
