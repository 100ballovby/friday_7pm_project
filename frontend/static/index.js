const router = async () => {
    const routes =[
        {path: "/", view: () => console.log("Viewing dashboard")},
        {path: "/contacts", view: () => console.log("Viewing Contacts")},
        {path: "/portfolio", view: () => console.log("Viewing Portfolio")},
    ];
}