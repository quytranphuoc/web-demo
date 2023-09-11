import React, { useEffect, useState } from "react";
import LayoutAdmin from "../../../../Components/LayoutAdmin";
import SideBarAdmin from "./SideBarAdmin";
import CategoryModal from "../../../../Components/layout/components/Modals/CategoryModal";
import TableUser from "../../../../Components/layout/components/TableUser";
import { UsersData } from "../../../../Data/MovieData";
import { MdCreate } from "react-icons/md";
function Users() {
  
  return (
    <LayoutAdmin>
      <SideBarAdmin>
        {/* <CategoryModal
          modalOpen={modalOpen}
          setModalOpen={modalOpen}
          users={users}
        /> */}
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2">
            <h2 className="text-white">Users</h2>
            <button className="bg-subMain flex-rows gap-4 font-medium transitions text-white py-2 px-4 rounded">
              <MdCreate />
              Create
            </button>
          </div>
          <TableUser

          // OnEditFunction={OnEditFunction}
          />
        </div>
      </SideBarAdmin>
    </LayoutAdmin>
  );
}

export default Users;
