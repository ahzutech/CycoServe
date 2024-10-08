import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ServiceForm from './ServiceForm';  // Replace Service with the dataset name in uppercase
import Link from 'next/link';

export default function CreateService() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{
                width: 500,
                marginLeft: 'auto', // Move the drawer to the right side
            }}
            role="presentation"
        >
            <ServiceForm />  {/* Replace Service with the dataset name in uppercase */}
        </Box>
    );

    return (
        <div>
            <Link href={`/dashboard/services/create`}>
                <button className="border flex-1 w-32 bg-blue-600 text-sm rounded-lg py-1 px-4 ring-1 hover:bg-blue-500 text-white font-semibold">
                    Add New
                </button>
            </Link>

            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
