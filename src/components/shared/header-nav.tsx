import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import { useSidebar } from '@/hooks/use-sidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { usePathname } from '@/routes/hooks';
import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import { useRouter } from '@/routes/hooks';
interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export default function HeaderNav({
  items,
  setOpen,
  isMobileNav = false
}: DashboardNavProps) {
  const path = usePathname();
  const route = useRouter();
  const { isMinimized } = useSidebar();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid grid-cols-[45%,55%] items-center gap-2">
      <div className="flex space-x-[60px]">
        <TooltipProvider>
          {items.map((item, index) => {
            const Icon = Icons[item.icon || 'arrowRight'];
            return (
              item.href && (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Link
                      to={item.disabled ? '/' : item.href}
                      className={cn(
                        'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:text-muted-foreground',
                        path === item.href
                          ? 'text-black hover:text-black'
                          : 'transparent',
                        item.disabled && 'cursor-not-allowed opacity-80'
                      )}
                      onClick={() => {
                        if (setOpen) setOpen(false);
                      }}
                    >
                      <Icon
                        className={`size-5 ${index == 0 ? 'stroke-yellow' : index == 1 ? 'stroke-[#1ba6f9]' : 'stroke-[#f20e45]'}`}
                      />
                      {isMobileNav || (!isMinimized && !isMobileNav) ? (
                        <div className="flex flex-col">
                          <span
                            className={`${index == 0 ? 'text-yellow' : index == 1 ? 'text-[#1ba6f9]' : 'text-[#f20e45]'} truncate text-[14.5px]`}
                          >
                            {item.title}
                          </span>
                          <span className=" truncate text-[10px]">
                            {item.subTitle}
                          </span>
                        </div>
                      ) : (
                        ''
                      )}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    align="center"
                    side="right"
                    sideOffset={8}
                    className={!isMinimized ? 'hidden' : 'inline-block'}
                  >
                    {item.title}
                  </TooltipContent>
                </Tooltip>
              )
            );
          })}
        </TooltipProvider>
      </div>
      <div className="flex items-center justify-end space-x-3">
        <Input
          type="text"
          placeholder="Tìm kiếm sản phẩm dành cho riêng bạn"
          className="h-8 w-[80%] rounded-md bg-gray-200 px-4 py-5 text-[12px]"
        ></Input>
        <Link to="/cart">
          <div className="font-sm flex gap-2 rounded-lg bg-yellow p-2 font-bold ">
            2 <Icons.shoppingCart className="" />
          </div>
        </Link>
        <div
          className="font-sm flex cursor-pointer gap-2 rounded-lg bg-gray-300 p-2 font-bold"
          onClick={() => route.push('/profile')}
        >
          <Icons.user className="" />
        </div>
        {/* <UserNav /> */}
      </div>
    </nav>
  );
}
