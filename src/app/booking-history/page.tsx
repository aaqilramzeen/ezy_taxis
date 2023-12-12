"use client";

import { Badge, Button, Modal, Select, Table } from "flowbite-react";
import { db } from "../utils/firebase";
import { doc, collection, getDocs, updateDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Booking } from "../interfaces/booking";
import Loader from "../components/Loader";
import withAuth from "../components/withAuth";
import { useRouter } from "next/navigation";

const BookingHistory = () => {
  const [bookings, setBookings] = useState<Array<Booking>>([]);
  const [booking, setBooking] = useState<Booking>({});
  const [openModal, setOpenModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);


  const router = useRouter();
  const auth = getAuth();

  const fetchData = async () => {
    try {
      setLoading(true);
      const collectionRef = collection(db, "bookings");
      const querySnapshot = await getDocs(collectionRef);

      const fetchedData: Array<Booking> = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setBookings(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusChange = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "bookings", booking.id!);
      await updateDoc(docRef, { status: selectedStatus });

      setOpenModal(false);
      fetchData();
    } catch (error) {
      console.error("Error updating status:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoggingOut(true);
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoggingOut(false);
    }
  };


  return (
    <main className="mt-24">
      <section>
        <div className="flex justify-between items-center wrap">
          <h1 className="mb-3 text-4xl font-bold">Bookings History</h1>
          <Button size="sm" outline onClick={handleLogout}>
            <span className="mr-2">
              {loggingOut ? "Logging you out..." : "Logout"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </Button>
        </div>
        <hr />
        <div className="mt-10 overflow-x-auto">
          {loading ? (
            <Loader />
          ) : (
            <>
              <Table striped>
                <Table.Head>
                  <Table.HeadCell>Full name</Table.HeadCell>
                  <Table.HeadCell>Pickup</Table.HeadCell>
                  <Table.HeadCell>Drop</Table.HeadCell>
                  <Table.HeadCell>Date</Table.HeadCell>
                  <Table.HeadCell>Time</Table.HeadCell>
                  <Table.HeadCell>Status</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {bookings.map((booking) => (
                    <Table.Row
                      key={booking.id}
                      className="bg-white cursor-pointer"
                      onClick={() => {
                        setBooking(booking);
                        setSelectedStatus(booking.status!);
                        setOpenModal(true);
                      }}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                        {booking.fullName}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                        {booking.pickup}{" "}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                        {booking.drop}{" "}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                        {booking.date}{" "}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                        {booking.time}{" "}
                      </Table.Cell>
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 flex gap-2 items-center">
                        {booking.status === "pending" ? (
                          <Badge color="warning">Pending</Badge>
                        ) : booking.status === "confirmed" ? (
                          <Badge color="success">Confirmed</Badge>
                        ) : (
                          <Badge color="failure">Cancelled</Badge>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>

              {!bookings.length ? (
                <p className="p-3 text-slate-800 text-center font-medium text-lg w-full">
                  No Bookings Found
                </p>
              ) : null}
            </>
          )}
        </div>
      </section>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <span className="text-cyan-800">Booking Details</span>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="text-slate-800 leading-loose">
              <p>
                <b>Full Name: </b>
                {booking.fullName}
              </p>
              <p>
                <b>Phone: </b>
                <a href={`tel:${booking.phone}`}>{booking.phone}89</a>
              </p>
              <p>
                <b>Email: </b>
                {booking.email}
              </p>
              <p>
                <b>Pickup: </b>
                {booking.pickup}
              </p>
              <p>
                <b>Drop: </b>
                {booking.drop}
              </p>
              <p>
                <b>Date: </b>
                {booking.date}
              </p>
              <p>
                <b>Time: </b>
                {booking.time}
              </p>
              <div className="flex gap-2 items-center">
                <b>Status:</b>
                <Select
                  id="status"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </Select>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-end gap-2 grow">
            <Button
              onClick={handleStatusChange}
              isProcessing={loading}
              disabled={loading}
            >
              Update Status
            </Button>
            <Button onClick={() => setOpenModal(false)} outline>
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default withAuth(BookingHistory);
