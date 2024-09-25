'use client';
import HeaderNav from '@/components/shared/header-nav';
import { navItems, subNavItems } from '@/constants/data';
import { useSidebar } from '@/hooks/use-sidebar';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Icons } from '@/components/ui/icons';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };
  return (
    <nav
      className={cn(
        `relative z-10 mx-auto hidden w-[80%] flex-none  px-3 md:block`,
        status && 'duration-500',
        !isMinimized ? 'w-full' : 'w-[80px]'
      )}
    >
      <div
        className={cn(
          'mx-auto w-[80%] px-0 py-5 md:px-2',
          isMinimized ? 'justify-center ' : 'justify-between'
        )}
      >
        {!isMinimized && (
          <div className=" flex  items-center justify-between">
            <>
              <div className="text-[20px] font-bold">G-Local Shoes</div>
              <div className="flex gap-2">
                {subNavItems.map((item, index) => {
                  const Icon = Icons[item.icon || 'arrowRight'];
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:text-muted-foreground"
                    >
                      <Icon className={`ml-2.5 size-5`} />
                      <span className="mr-2 truncate text-[13px]">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </>
          </div>
        )}
        <div className=" space-y-4 py-4">
          <HeaderNav items={navItems} />
        </div>
      </div>
    </nav>
  );
}
