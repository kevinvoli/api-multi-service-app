import {
  Controller, Get, Post, Patch, Body, Param, Query, ParseIntPipe,
} from '@nestjs/common';
import { AdminPanelService } from './admin-panel.service';

@Controller('admin')
export class AdminPanelController {
  constructor(private readonly adminPanelService: AdminPanelService) {}

  // ─── Dashboard ───────────────────────────────────────────────────────────────

  /** GET /admin/dashboard — Statistiques globales */
  @Get('dashboard')
  getDashboardStats() {
    return this.adminPanelService.getDashboardStats();
  }

  // ─── Riders ──────────────────────────────────────────────────────────────────

  /** GET /admin/riders?page=&limit=&search=&status= */
  @Get('riders')
  listRiders(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('status') status?: string,
  ) {
    return this.adminPanelService.listRiders(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
      search,
      status,
    );
  }

  /** PATCH /admin/riders/:id/status */
  @Patch('riders/:id/status')
  updateRiderStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: 'Active' | 'Inactive' | 'Deleted',
  ) {
    return this.adminPanelService.updateRiderStatus(id, status);
  }

  // ─── Drivers ─────────────────────────────────────────────────────────────────

  /** GET /admin/drivers?page=&limit=&search=&status=&companyId= */
  @Get('drivers')
  listDrivers(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('status') status?: string,
    @Query('companyId') companyId?: string,
  ) {
    return this.adminPanelService.listDrivers(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
      search,
      status,
      companyId ? parseInt(companyId, 10) : undefined,
    );
  }

  /** PATCH /admin/drivers/:id/status */
  @Patch('drivers/:id/status')
  updateDriverStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: 'active' | 'inactive' | 'Deleted' | 'Suspend',
  ) {
    return this.adminPanelService.updateDriverStatus(id, status);
  }

  // ─── Companies ───────────────────────────────────────────────────────────────

  /** GET /admin/companies?page=&limit=&search=&status= */
  @Get('companies')
  listCompanies(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('status') status?: string,
  ) {
    return this.adminPanelService.listCompanies(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
      search,
      status,
    );
  }

  /** PATCH /admin/companies/:id/status */
  @Patch('companies/:id/status')
  updateCompanyStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: 'Active' | 'Inactive' | 'Deleted',
  ) {
    return this.adminPanelService.updateCompanyStatus(id, status);
  }

  // ─── Commandes Restaurant ────────────────────────────────────────────────────

  /** GET /admin/orders?page=&limit=&companyId=&statusCode= */
  @Get('orders')
  listOrders(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('companyId') companyId?: string,
    @Query('statusCode') statusCode?: string,
  ) {
    return this.adminPanelService.listOrders(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
      companyId ? parseInt(companyId, 10) : undefined,
      statusCode ? parseInt(statusCode, 10) : undefined,
    );
  }

  /** PATCH /admin/orders/:id/status */
  @Patch('orders/:id/status')
  updateOrderStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('statusCode', ParseIntPipe) statusCode: number,
  ) {
    return this.adminPanelService.updateOrderStatus(id, statusCode);
  }

  // ─── Trips Transport ─────────────────────────────────────────────────────────

  /** GET /admin/trips?page=&limit=&status=&companyId= */
  @Get('trips')
  listTrips(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('status') status?: string,
    @Query('companyId') companyId?: string,
  ) {
    return this.adminPanelService.listTrips(
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
      status,
      companyId ? parseInt(companyId, 10) : undefined,
    );
  }

  // ─── Administrateurs ─────────────────────────────────────────────────────────

  /** GET /admin/admins */
  @Get('admins')
  listAdmins() {
    return this.adminPanelService.listAdmins();
  }

  /** POST /admin/admins */
  @Post('admins')
  createAdmin(
    @Body() body: {
      vFirstName: string;
      vLastName: string;
      vEmail: string;
      password: string;
      iGroupId?: number;
    },
  ) {
    return this.adminPanelService.createAdmin(body);
  }

  /** PATCH /admin/admins/:id/status */
  @Patch('admins/:id/status')
  updateAdminStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: 'Active' | 'Inactive' | 'Deleted',
  ) {
    return this.adminPanelService.updateAdminStatus(id, status);
  }
}
