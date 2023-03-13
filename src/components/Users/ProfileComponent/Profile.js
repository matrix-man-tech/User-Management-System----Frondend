import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserIcon } from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux';
import { userProfileAction } from '../../../redux/slices/users/userSlices';
import DateFormatter from '../../../utils/DateFormatter';
import Loadingcomponent from '../../../utils/LoadingComponent';

export default function Profile(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(userProfileAction(id));
  }, [id, dispatch]);

  //user data from store
  const user = useSelector((state) => state.users);
  const { profile, loading, appErr, serverErr } = user;
  console.log(profile);
  return (
    <>
      <div
        className="min-h-screen text-red-500
       bg-black-500 flex justify-center items-center"
      >
        {loading ? (
          <Loadingcomponent />
        ) : appErr || serverErr ? (
          <h2 className="text-red-400 text-2  xl">
            {serverErr}
            {appErr}
          </h2>
        ) : (
          <div className="h-screen flex overflow-hidden bg-white">
            <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
              <div className="flex-1 relative z-0 flex overflow-hidden">
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                  <article>
                    <div>
                      <div>
                        <img
                          className="h-32 w-full object-cover lg:h-48"
                          src={profile?.profilePhoto}
                          alt={profile?.firstName}
                        />
                      </div>
                      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                          <div className="flex -mt-20">
                            <img
                              className="h-24 w-auto rounded-full  ring-4 ring-white sm:h-32 sm:w-32"
                              src={profile?.profilePhoto}
                              alt={profile?.firstName}
                            />
                          </div>
                          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                            <div className=" flex flex-col 2xl:block mt-10 min-w-0 flex-1">
                              <h1 className="text-2xl font-bold text-gray-900 ">
                                {profile?.firstName} {profile?.lastName}
                              </h1>
                              <p className="m-3 text-lg">
                                Date Joined:
                                <DateFormatter date={profile?.createdAt} />{' '}
                              </p>
                              <p className="text-green-400 mt-2 mb-2"></p>
                            </div>

                            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                              {/* // Hide follow button from the same */}
                              <div>
                                <>
                                  <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                  ></button>
                                </>
                              </div>

                              {/* Update Profile */}

                              <>
                                <Link
                                  to={`/update-profile/${profile?._id}`}
                                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                >
                                  <UserIcon
                                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span>Update Profile</span>
                                </Link>
                              </>
                            </div>
                          </div>
                        </div>
                        <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1"></div>
                      </div>
                    </div>
                    {/* Tabs */}
                    <div className="mt-6 sm:mt-2 2xl:mt-5">
                      <div className="border-b border-red-900">
                        <div className="max-w-5xl mx-auto "></div>
                      </div>
                    </div>
                    <div className="flex justify-center place-items-start flex-wrap  md:mb-0">
                      <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                        <ul className="">
                          <Link>
                            <div className="flex mb-2 items-center space-x-4 lg:space-x-6">
                              <div className="font-medium text-lg leading-6 space-y-1"></div>
                            </div>
                          </Link>
                        </ul>
                      </div>

                      <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0"></div>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
