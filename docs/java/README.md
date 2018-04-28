---
sidebar: auto
---

# Java札记

## 多线程／异步/高并发

### 多线程

>多线程示例:

``` java

private ExecutorService executorService = Executors.newFixedThreadPool(10);

public Map<String, Object> selectRaspAttackInfoListPage(final Integer page, final Integer size, final RaspAttackInfo raspAttackInfo) {
        Map<String,Object> result = new HashMap<String,Object>();
        try {
            Future<Integer> integerFuture =  executorService.submit(new Callable<Integer>() {
                @Override
                public Integer call() throws Exception {
                    return totalRaspAttackInfoList(raspAttackInfo);
                }
            });

            Future<List<RaspAttackInfoVo>> listFuture = executorService.submit(new Callable<List<RaspAttackInfoVo>>() {
                @Override
                public List<RaspAttackInfoVo> call() throws Exception {
                    return  selectRaspAttackInfoPage(page, size, raspAttackInfo);
                }
            });

            Future<Map<String,Long>> mapFuture  =  executorService.submit(new Callable<Map<String, Long>>() {
                @Override
                public Map<String, Long> call() throws Exception {
                    return constructDayCountsMap(raspAttackInfo);
                }
            });
            result.put("total", integerFuture.get());
            result.put("list",listFuture.get());
            result.put("day_counts",mapFuture.get());
        } catch (Exception e) {
            LOGGER.info("selectRaspAttackInfoListPage error",e);
        }
        return result;
    }
```