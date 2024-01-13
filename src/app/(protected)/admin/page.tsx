"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentRole } from "../../../../hooks/use-current-role";
import { RoleGate } from "@/components/auth/role-gate";
import { UserRole } from "@prisma/client";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { admin } from "../../../../actions/admin";

const AdminPage = () => {
  const onServerActionClick = async () => {
    const data = await admin();
    if (data.success) {
      toast.success("Allowed Server Action");
    } else {
      toast.error("Not allowed Server Action");
    }
  };
  const onApiRouteClick = async () => {
    const res = await fetch("/api/admin");
    if (res.ok) {
      toast.success("Allowed API Route");
    } else {
      toast.error("Not allowed API Route");
    }
  };
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content!" />
        </RoleGate>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button variant="default">Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
